/* 
- Streams allows to read and write data in chunks i.e. efficiently
- As file system also implements Events
- 'data' is the event which will be fired when stream will read the data
- If the file size is more then buffer size then we have to use stream while reading files
- We should always use buffer to read/write files

- Pipes allows to take a source stream (i.e. readable stream) to a destination (i.e. writeable stream)
*/

const fs = require("fs")

const writeStream = fs.createWriteStream("./data/file.txt")
const readStream = fs.createReadStream(
  "./data/what-is-stream.txt",
  "utf8",
  (err) => { }
)

// Way-1
/* readStream.on("data", (chunk) => {
  console.log(chunk + "\n\n*****")
  writeStream.write(chunk)
}) */

// Way-2
readStream.pipe(writeStream)
