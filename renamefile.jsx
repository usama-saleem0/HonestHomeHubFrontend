import { readdirSync, statSync, renameSync } from 'fs';
import { join } from 'path';

// Function to recursively get all files in a directory
function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = readdirSync(dirPath);

  files.forEach(file => {
    const filePath = join(dirPath, file);
    if (statSync(filePath).isDirectory()) {
      arrayOfFiles = getAllFiles(filePath, arrayOfFiles);
    } else {
      arrayOfFiles.push(filePath);
    }
  });

  return arrayOfFiles;
}

// Function to rename .js files to .jsx
function renameFilesToJsx() {
  const allFiles = getAllFiles('./'); // Replace './' with your target directory if different
  allFiles.forEach(file => {
    if (file.endsWith('.js')) {
      const newFileName = file.replace(/\.js$/, '.jsx');
      renameSync(file, newFileName);
      console.log(`Renamed: ${file} -> ${newFileName}`);
    }
  });
}

renameFilesToJsx();
