const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('This is the Message for root domain')
  } else {
    res.write("Hmm.. Not a root domain!")
  }
  res.end()
})

const PORT = 5000
server.listen(PORT, "localhost", () => console.log("Great! Server Started"))