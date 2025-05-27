function downloadData(url) {
    console.log(`Starting download from ${url}...`);
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = "Sample data from " + url;
        console.log(`Download complete from ${url}`);
        resolve(data);
      }, 1000);
    });
  }
  
  function writeFile(data) {
    console.log("Writing data to file...");
    return new Promise((resolve) => {
      setTimeout(() => {
        const filename = "file.txt";
        console.log("Data written to file:", filename);
        resolve(filename);
      }, 1000);
    });
  }
  
  function uploadFile(filename, uploadUrl) {
    console.log(`Uploading ${filename} to ${uploadUrl}...`);
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(`Upload of ${filename} to ${uploadUrl} complete`);
        resolve("Upload successful");
      }, 1000);
    });
  }
  
  // Chaining with .then()
  downloadData("https://example.com")
    .then((data) => writeFile(data))
    .then((filename) => uploadFile(filename, "https://upload.com"))
    .then((message) => console.log(message))
    .catch((err) => console.error(err));
  