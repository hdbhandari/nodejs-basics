const fs = require("fs")

fs.rename("./data/fileName.txt", "./data/newfileName.txt", (err) => {
  if (err) {
    console.log("Error while renaming.")
  } else {
    console.log("Renamed the file.")
  }
})