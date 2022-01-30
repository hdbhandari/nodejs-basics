// Import events module
const EventEmitter = require('events')

// creating instance of EventEmitter
const eventEmitter = new EventEmitter()

// Setting up Event
eventEmitter.on('eventName', () => {
  console.log('Event named "eventName" is emitted.')
})

// Fire the event
eventEmitter.emit('eventName')