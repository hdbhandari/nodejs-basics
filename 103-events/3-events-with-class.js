const EventEmitter = require('events')

class Car extends EventEmitter {
  constructor(color) {
    super()
    this.color = color
  }

  color() {
    return this.color
  }
}

let car = new Car('red')
car.on('eventName', (param) => { console.log(`Event on class fired with param: ${param} and car's color is: ${car.color}`) })
car.emit('eventName', 'any Value')