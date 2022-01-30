// Import events module
const EventEmitter = require('events')

// creating instance of EventEmitter
const eventEmitter = new EventEmitter()

// Setting up Event
eventEmitter.on('sum', (val1, val2) => {
  console.log(`Sum of submitted params(${val1}, ${val2}) via events is: ${val1 + val2}`)
})

// Fire the event
eventEmitter.emit('sum', 45, 55)