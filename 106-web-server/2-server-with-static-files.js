const http = require('http')
const fs = require("fs")

const server = http.createServer((req, res) => {

  if (req.url === '/') {
    res.write('This is the Message for root domain')
    res.end()
  } else if (req.url === '/index') {
    const readStream = fs.createReadStream("./static/index.html", (err) => {
      err ? console.log("Error: " + err) : console.log("success")
    })
    res.writeHead(200, { "content-type": "text/html" }, (err) => {
      err ? console.log("Error: " + err) : console.log("success")
    })
    // response is also a writable stream
    readStream.pipe(res)
  } else if (req.url === '/json') {
    const readStreamJSON = fs.createReadStream("./static/index.json", (err) => {
      err ? console.log("Error: " + err) : console.log("success")
    })
    res.writeHead(200, { "content-type": "application/json" }, (err) => {
      err ? console.log("Error: " + err) : console.log("success")
    })
    // response is also a writable stream
    readStreamJSON.pipe(res)
  } else if (req.url === '/img') {
    // Image by <a href="https://pixabay.com/users/copyrightfreepictures-203/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=736399">CopyrightFreePictures</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=736399">Pixabay</a>
    const readStreamImg = fs.createReadStream("./static/img.png", (err) => {
      err ? console.log("Error: " + err) : console.log("success")
    })
    res.writeHead(200, { "content-type": "image/png" }, (err) => {
      err ? console.log("Error: " + err) : console.log("success")
    })
    // response is also a writable stream
    readStreamImg.pipe(res)
  } else {
    res.write('This is a 404 URL i.e. not available on the server.')
    res.end()
  }
})

const PORT = 5000
server.listen(PORT, "localhost", () => console.log("Great! Server Started"))