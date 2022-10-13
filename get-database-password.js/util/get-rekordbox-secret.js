import asar from "asar";
import fs from "node:fs/promises";
import path from "node:path";

const getLatestRekordboxInstallationDirectory = async () => {
	const pioneerProgramFiles = process.env.ProgramFiles + "/Pioneer";

	const directoryContents = await fs.readdir(pioneerProgramFiles, {
		withFileTypes: true,
	});

	const rekordboxInstallations = directoryContents.filter(
		(entry) => entry.isDirectory() && entry.name.match(/^rekordbox \d\.\d\.\d$/)
	);

	// e.g. "rekordbox 6.6.4"
	const latestVersionDirectory =
		rekordboxInstallations.sort()[rekordboxInstallations.length - 1];

	return path.join(pioneerProgramFiles, latestVersionDirectory.name);
};

const getAsarFilePath = async () => {
	const latestRekordboxInstallationDirectory =
		await getLatestRekordboxInstallationDirectory();
	return path.join(
		latestRekordboxInstallationDirectory,
		"rekordboxAgent-win32-x64/resources/app.asar"
	);
};

const getSecretFromAuthManagerContents = (authManagerContents) => {
	const result = /pass: "(\w+)"/.exec(authManagerContents);
	return result[1];
};

export const getRekordboxSecret = async () => {
	const authManagerContents = asar
		.extractFile(await getAsarFilePath(), "controllers/auth_manager.js")
		.toString();

	return getSecretFromAuthManagerContents(authManagerContents);
};
