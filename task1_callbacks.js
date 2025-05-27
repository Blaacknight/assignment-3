function downloadData(url, callback) {
    console.log(`Starting download from ${url}...`);
    setTimeout(() => {
      const data = "Sample data from " + url;
      console.log(`Download complete from ${url}`);
      callback(null, data);
    }, 1000);
  }
  
  function writeFile(data, callback) {
    console.log("Writing data to file...");
    setTimeout(() => {
      const filename = "file.txt";
      console.log("Data written to file:", filename);
      callback(null, filename);
    }, 1000);
  }
  
  function uploadFile(filename, uploadUrl, callback) {
    console.log(`Uploading ${filename} to ${uploadUrl}...`);
    setTimeout(() => {
      console.log(`Upload of ${filename} to ${uploadUrl} complete`);
      callback(null, "Upload successful");
    }, 1000);
  }
  
  // Chaining callbacks
  downloadData("https://example.com", (err, data) => {
    if (err) return console.error(err);
    writeFile(data, (err, filename) => {
      if (err) return console.error(err);
      uploadFile(filename, "https://upload.com", (err, message) => {
        if (err) return console.error(err);
        console.log(message);
      });
    });
  });
  