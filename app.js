    //---- Section 3 Lesson 3 ----//
// const checkUtils = require('./src/utils.js')
// checkUtils()

    //---- Section 4 Lesson 2 ----//
// const command = process.argv[2]
// if (command === 'add') { 
//    console.log('Adding note!') 
// } else if (command === 'remove') { 
//    console.log('Removing note!') 
// }



    //---- Section 4 Lesson 3 ----//
// const yargs = require('yargs')
// yargs.version('1.1.0')
// yargs.command({ 
//     command: 'add', 
//     describe: 'Add a new note', 
//     handler: function () { 
//         console.log('Adding a new note!') 
//     } 
// })
// console.log(yargs.argv) 



    //---- Section 4 Lesson 4 ----//
// yargs.command({ 
//     command: 'add', 
//     describe: 'Add a new note', 
//     builder: { 
//         title: { 
//             describe: 'Note title', 
//             demandOption: true, 
//             type: 'string' 
//         }, 
//         body: { 
//             describe: 'Note body', 
//             demandOption: true, 
//             type: 'string' 
//         } 
//     }, 
//     handler: function (argv) { 
//         console.log('Title: ' + argv.title) 
//         console.log('Body: ' + argv.body) 
//     } 
// }) 


        //---- Section 4 Lesson 5 ----//
// const book = { 
//     title: 'Test', 
//     author: 'Farid' 
//   }
   
//   // Covert JavaScript object into JSON string 
//   const bookJSON = JSON.stringify(book)
   
//   // Covert JSON string into object 
//   const bookObject = JSON.parse(bookJSON) 
//   console.log(bookObject.title) 


        //---- Section 4 Lesson 8 ----//
// const squareAlt = (x) => { 
//     return x * x 
// }
// console.log(squareAlt(6))    // Will print: 4 

// const event = { 
//     name: 'Tidak Diundang', 
//     guestList: ['Andre', 'Jenson', 'Mikey'], 
//     kuku: 'ke acara',
//     printGuestList() { 
//         console.log('Tamu yang ' + this.name) 
         
//         this.guestList.forEach((guest) => { 
//             console.log(guest + ' Tidak diundang ' + this.kuku) 
//         }) 
//     } 
// }
// event.printGuestList() 


        //---- Section 4 Lesson 9 ----//
// const users = [{ 
//     name: 'Farid', 
//     age: 18 
//   },{ 
//     name: 'Bagus Nugroho', 
//     age: 20
//   },{ 
//     name: 'Rangga', 
//     age: 15 
//   }]
   
//   const user = users.find((user) => user.name === 'Rangga') 
//   const user2 = users.find((user) => user.name === 'Farid') 
   
//   console.log(user) // Will print the second object in the array 
//   console.log(user2)


        
        //---- Section 6 Lesson 2 ----//
// console.log('Mulai')
 
// // Wait 2 seconds before running the function 
// setTimeout(() => { 
//     console.log('selama 2 detik') 
// }, 200)
 
// console.log('Berhenti') 


        //---- Section 6 Lesson 4 ----//
// const request = require('request')
// const url = 'http://api.weatherapi.com/v1/forecast.json?key=acb6d2fc87b54ee29ea173703222708&q=London&days=1&aqi=no&alerts=no'
// request({ url: url }, (error, response) => { 
//     // Parse the response body from JSON string into JavaScript object 
//     const data = JSON.parse(response.body)
 
//     // Will print the current temperature to the console 
//     console.log(data.location.name) 
// }) 


        //---- Section 6 Lesson 5 ----//
const request = require('request')
const url = 'http://api.weatherapi.com/v1/forecast.json?key=acb6d2fc87b54ee29ea173703222708&q=London&days=1&aqi=no&alerts=no'
request({ url: url, json: true }, (error, response)  => { 
    console.log('We are at ' + response.body.location.name + 'and quiet cold here with ' + response.body.current.temp_c + 'c degree and ' + response.body.current.condition.text + ' weather ')
})
