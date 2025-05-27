async function processDataFlow() {
    try {
      const data = await downloadData("https://example.com");
      const filename = await writeFile(data);
      const message = await uploadFile(filename, "https://upload.com");
      console.log(message);
    } catch (err) {
      console.error(err);
    }
  }
  
  processDataFlow();
  