const fs = require('fs')

console.log("Writing files, which we will read and delete next!")

fs.writeFile(
  "./data/fileName.txt",
  "This is what I want to keep in my file",
  (err) => {
    if (err) {
      console.log(err)
    } else {
      console.log("File created successfully.")
    }
  }
)

/* Below method is not recommended as it halts the flow */
/* 
fs.writeFileSync(
  "./data/fileName1.txt",
  "This is what I want to keep in my file created with sync!",
  (err) => {
    if (err) {
      console.log(err)
    } else {
      console.log("File created successfully.")
    }
  }
)
*/
console.log("ok from outside file write methods")