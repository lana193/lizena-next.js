import imageCompression from 'browser-image-compression';

const options = {
    maxSizeMB: 1,
    maxWidthOrHeight: 1920,
    useWebWorker: true,
    fileType: 'jpeg'
}

export const handleUploadedImg = async(files) => {
  files.forEach(file => 
    {
      console.log('originalFile instanceof Blob', file instanceof Blob); // true
      console.log(`originalFile size ${file.size / 1024 / 1024} MB`);
    }
  )
   
  try {
    const compressedFiles = [];
    for (const file of files) {
        const compressedFile = await imageCompression(file, options);
        compressedFiles.push(compressedFile);
      }

    Array.prototype.splice.apply(files, [0, compressedFiles.length].concat(compressedFiles));
    return files;
    } catch (error) {
      console.log(error);
    }  
}
