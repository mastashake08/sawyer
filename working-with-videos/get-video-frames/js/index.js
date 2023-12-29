/**
 * step 1: open file system and grab video
 * step 2: grab the video track and create a new processor 
 * step 3: create a new transform stream that will save the video frames
 * step 4: create class to expose all functions "class" is a group of functions and properties
 */
async function getFile() {
    // Open file picker and destructure the result the first handle
    const [fileHandle] = await window.showOpenFilePicker();
    const file = await fileHandle.getFile();
    return file;
  }
  