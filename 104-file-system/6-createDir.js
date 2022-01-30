const fs = require("fs")

// Create a Folder
fs.mkdir("./data/folders", (err) => {
  if (err) {
    console.log("Error: " + err)
  } else {
    console.log("folder created")
  }
})
