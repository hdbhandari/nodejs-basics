/* 
  ReadLine module : This module allows user to prompt for input  
*/

/*
  - We need to create instance of readline interface, for which we have used createInterface()
  - process is a global Object, which is already provided by node, so we don't need to require it
  - stdin is input stream
  - readline has a method named question
*/
const readline = require("readline")
const { RSA_X931_PADDING } = require("constants")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let num1 = Math.floor(Math.random() * 10 + 1)
let num2 = Math.floor(Math.random() * 10 + 1)
let answer = num1 + num2

rl.question(
  `(question-that-we-want-to-ask-to-the-user)What is ${num1} + ${num2} : ? `,
  (userInput) => {
    if (userInput.trim() == answer) {
      rl.close()
    } else {
      // Letting user add input again
      rl.setPrompt("Incorrect respose, please try again.. : ")
      rl.prompt()

      // when user enter the input it will call 'line' event
      rl.on("line", (userInput) => {
        if (userInput.trim() == answer) {
          rl.close()
        } else {
          rl.setPrompt(
            `Your answer of ${userInput} is incorrect, try again. \n`
          )
          rl.prompt()
        }
      })
    }
  }
)

/*
  - readline has implemented EventEmitter class.
  - SO, here we are calling on close event, which will be fired from rl.question
*/
rl.on("close", () => {
  console.log("Correct and closing it.")
})
