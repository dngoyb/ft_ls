const fs = require('fs');
const path = require('path');

const { lstat } = fs.promises;

const targetPath = process.argv[2] || process.cwd();

fs.readdir(targetPath, async (err, filenames) => {
	if (err) {
		throw new Error(err);
	}

	for (const filename of filenames) {
		try {
			const stats = await lstat(path.join(targetPath, filename));

			if (stats.isFile()) {
				console.log(filename);
			} else {
				console.log(filename);
			}
		} catch (error) {
			throw new Error(error);
		}
	}
});
