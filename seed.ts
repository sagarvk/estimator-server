import * as path from 'path';
import { readFile, ensureDir } from 'fs-extra';
import * as Unrar from 'unrar-promise';
import { config } from 'dotenv';

config();

const getFilePath = (...names: string[]) => {
  const currentPath = process.cwd();
  const filePath = path.join(currentPath, ...names);
  return path.resolve(filePath);
};

async function extractFiles() {
  const filepath = getFilePath('DB JSON.rar');
  const targetPath = getFilePath('tmp');
  await ensureDir(targetPath);

  console.log(Unrar);
}

async function seed() {
  await extractFiles();
}

seed();
