const fs = require('fs')

fs.readFile("./data/fileName.txt", "utf8", (err, file) => {
  if (err) {
    console.log("Error while reading the file: " + err)
  } else {
    console.log(file)
  }
})
