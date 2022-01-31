const fs = require("fs")
/* zlib module is to compress files */
const zlib = require("zlib")

const readStream = fs.createReadStream(
  "./data/what-is-stream.txt",
  "utf8",
  (err) => { }
)
const writeStreamZip = fs.createWriteStream("./data/what-is-stream.txt.gz")
const gzip = zlib.createGzip()
readStream.pipe(gzip).pipe(writeStreamZip)