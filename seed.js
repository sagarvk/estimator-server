const path = require('path');
const fs = require('fs-extra');
const Unrar = require('unrar-promise');
const config = require('dotenv');

config();

const getFilePath = (...names) => {
  const currentPath = process.cwd();
  const filePath = path.join(currentPath, ...names);
  return path.resolve(filePath);
};

function extractFiles() {
  const filepath = getFilePath('DB JSON.rar');
  const targetPath = getFilePath('tmp');
  return fs.ensureDir(targetPath);
}

function seed() {
  extractFiles().then(() => {
    console.log('Done');
  });
}

seed();
