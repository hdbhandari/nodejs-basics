const fs = require("fs")

fs.unlink("./data/newfileName.txt", (err) => {
  if (!err) {
    console.log("Deleted")
  } else {
    console.log("Error while delete.")
  }
})