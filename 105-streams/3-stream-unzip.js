const fs = require("fs")
const zlib = require("zlib")
const gunzip = zlib.createGunzip()

const readStreamZip = fs.createReadStream(
  "./data/what-is-stream.txt.gz",
  (err) => {
    err ? console.log(err) : console.log("no error")
  }
)
const writeStreamUnzip = fs.createWriteStream(
  "./data/what-is-stream-unzipped.txt",
  (err) => {
    err ? console.log(err) : console.log("no error")
  }
)
readStreamZip.pipe(gunzip).pipe(writeStreamUnzip)