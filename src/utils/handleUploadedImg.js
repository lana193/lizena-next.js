import imageCompression from 'browser-image-compression';

const options = {
    maxSizeMB: 1,
    maxWidthOrHeight: 1920,
    useWebWorker: true,
    fileType: 'jpeg'
}

export const handleUploadedImg = async(files) => {
  console.log(777, files)
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
        console.log(3333, compressedFile);
        compressedFiles.push(compressedFile);
      }
      // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
        // console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`);
        console.log(222, compressedFiles);
    //     files картинки -> blob
    // files = compressedFiles;
    // console.log(8888, [...files, ...compressedFiles]);
    Array.prototype.splice.apply(files, [0, compressedFiles.length].concat(compressedFiles));
    console.log(66, files)
    return files;
    } catch (error) {
      console.log(error);
    }  
}
