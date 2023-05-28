

import * as fs from 'node:fs';
import { mkdir } from 'node:fs/promises';


// Note: when opening a file always close it as it can cause a memory leak

const content = "Here is some content";

try {
    const projectFolder = new URL('./test/project/', import.meta.url);
    await mkdir(projectFolder, { recursive: true }).then(console.log);
    fs.writeFile('./test/project/random_file.txt', content, (err) => {
        console.error("write: " + err);
    });
  } catch (err) {
    console.error("dir: " + err.message);
  }









