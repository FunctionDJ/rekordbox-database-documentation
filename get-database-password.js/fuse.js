import fs from "node:fs/promises";

const outputDirName = "rekordbox-database-extractor";

const outputContents = await fs.readdir(`./${outputDirName}`, {
	withFileTypes: true,
});
const partFiles = outputContents
	.filter((d) => d.isFile() && d.name.match(/^master\.db\.part\d+$/))
	.sort((a, b) => (a.name < b.name ? -1 : 1));

fs.writeFile(
	"./result.db",
	Buffer.concat(
		await Promise.all(
			partFiles.map((d) => fs.readFile(`./${outputDirName}/${d.name}`))
		)
	)
);
