const core = require('@actions/core');
const fs = require('fs').promises;
const path = require('path');

async function createFile (){
  try{
    const filePath = core.getInput('path');
    const isAbsolutePath = core.getBooleanInput('isAbsolutePath');
    const file = core.getInput('file')
    const content = core.getInput('content')
    const absolutePath = isAbsolutePath ? filePath : path.join(process.cwd(),filePath);
    try{
      await fs.access(absolutePath)
    }catch(error){
      await fs.mkdir(absolutePath, {recursive: true})
    }
    try{
      await fs.access(absolutePath)
    }catch(error){
      core.setFailed("couldn't create directory structure");
    }
    await fs.writeFile(path.join(absolutePath,file), content)
  }catch (error) {
    core.setFailed(error.message);
  }
}

createFile();