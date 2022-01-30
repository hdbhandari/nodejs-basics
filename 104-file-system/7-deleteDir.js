const fs = require("fs")

fs.rmdir("./data/folders", (err) => {
  if (err) {
    console.log("Error in folder delete: ", err)
  } else {
    console.log("Successfully deleted the folder")
  }
})