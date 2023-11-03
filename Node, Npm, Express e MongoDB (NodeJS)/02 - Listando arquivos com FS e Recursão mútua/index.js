const fs = require('fs');
const path = require('path')

async function readdir(rootDir){
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir()
    walk(files,rootDir)
}

async function walk(files){
    for (let file of files){
        const fileFullPath = path.resolve(rootDir, file)
        const stats = await fs.stat(fileFullPath);

        if(stats.isDirectory()){
            readdir();
        }


        console.log(file, stats.isDirectory());
    }
}

readdir();