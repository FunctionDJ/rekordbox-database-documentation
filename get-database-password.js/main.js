import { decodeDatabasePassword, getDatabaseInfo } from "./lib.js";
import { getRekordboxSecret } from "./util/get-rekordbox-secret.js";
import fs from "node:fs/promises";

(async () => {
	const outputDirName = "rekordbox-database-extractor";

	const [rekordboxSecret, { databasePath, encodedDatabasePassword }] =
		await Promise.all([
			getRekordboxSecret(),
			getDatabaseInfo(),
			fs.mkdir(`./${outputDirName}`, { recursive: true }).catch((e) => {
				if (e.code !== "ENOENT") {
					throw e;
				}
			}),
		]);

	const databasePassword = decodeDatabasePassword(
		rekordboxSecret,
		encodedDatabasePassword
	);

	const databaseFile = await fs.readFile(databasePath);

	const maxFileSizeForDiscordInBytes = 8 * 1024 * 1024;

	const totalChunks = Math.floor(
		databaseFile.byteLength / maxFileSizeForDiscordInBytes
	);

	for (let chunkNumber = 0; chunkNumber <= totalChunks; chunkNumber++) {
		const from = chunkNumber * maxFileSizeForDiscordInBytes;
		const to = (chunkNumber + 1) * maxFileSizeForDiscordInBytes;
		fs.writeFile(
			`./${outputDirName}/master.db.part${chunkNumber + 1}`,
			databaseFile.subarray(from, to)
		);
	}

	fs.writeFile(`./${outputDirName}/database-password.txt`, databasePassword);
})();
