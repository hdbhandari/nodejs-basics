const fs = require("fs")

console.log("In case of file not available, append will create the file")

fs.appendFile("./data/fileName.txt", "Appended text..", (err) => {
  if (err) {
    console.log("Error while appending", err)
  } else {
    console.log("Some new random content added to the file..: ")
  }
})
