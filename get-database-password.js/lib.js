import fs from "node:fs/promises";
import Blowfish from "egoroof-blowfish";

export const getDatabaseInfo = async () => {
	const optionsFilePath =
		process.env.APPDATA + "/Pioneer/rekordboxAgent/storage/options.json";
	const optionsFileContents = await fs.readFile(optionsFilePath, "utf-8");

	const { options } = JSON.parse(optionsFileContents);

	const databasePath = options.find(([name]) => name === "db-path")[1];
	const encodedDatabasePassword = options.find(([name]) => name === "dp")[1];

	return {
		databasePath,
		encodedDatabasePassword,
	};
};

export const decodeDatabasePassword = (
	rekordboxSecret,
	encodedDatabasePassword
) => {
	const blowfishInstance = new Blowfish(
		rekordboxSecret,
		Blowfish.MODE.ECB,
		Blowfish.PADDING.PKCS5
	);

	return blowfishInstance.decode(
		Buffer.from(encodedDatabasePassword, "base64"),
		Blowfish.TYPE.STRING
	);
};
