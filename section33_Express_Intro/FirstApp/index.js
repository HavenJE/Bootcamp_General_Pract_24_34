// Our very first express app topic 

// The goal here, is to get the server up and running 
// Remember! You need to restart your server anytime you change the code! Then, you need to refresh your server 

// const express = require('express');
// const app = express() // this is to execute express as a function 
// // console.dir(app) // to run the file on the terminal, do => node index.js 

// app.use(()=> {
//     console.log("WE GOT A NEW REQUEST!!") // anytime we have an incoming request, the call back of console will run 
// })

// app.listen(3000, ()=> { // these numbers e.g. 3000 are just addresses that connections on your machine 
//     console.log("LINGENING ON PORT 3000") // the (.listen) method listening for any incoming request 
// })

// The Request and Response objects 
// 
const express = require('express');
const app = express() 

app.listen(3000, ()=> { // these numbers e.g. 3000 are just addresses that connections on your machine 
    console.log("LINGENING ON PORT 3000") // the (.listen) method listening for any incoming request 
})

app.get('/search', (req, res) => {
    const { q } = req.query; 
    console.log(req.query); 
    if (!q) {
        res.send("Nothing found if nothing searched!")
    }
    res.send(`Hi search result of ${q}`) // remember, we you do that, you have to write http://localhost:3000/search?q=variable 
})

// this is route pattern e.g. /r/:variable/ 
app.get('/author/:authorId/:authorUsername', (req, res) => {
    console.log(req.params)
    const {authorId, authorUsername } = req.params; 
    res.send( `The number (${authorId}) is the ID# that belongs to the ${authorUsername}` ) // http://localhost:3000/author/13/HavenEldebaque
    // res.send(`The is auther_name`)
})

// this is the home route OR Root route which is reprsented by a slash only / 
app.get('/', (req, res) => { 
    console.log("HOMR ROUTE") 
    res.send('WELCOME TO MY HOME ROUTE 🏡!!')
})

app.get('/cats', (req, res) => { 
    console.log("CATS REQUEST") 
    res.send('Meow 🐱')
})

app.get('/dogs', (req, res) => { 
    console.log("dogs REQUEST") 
    res.send('Woof! 🐶')
})

// This is the generic response route, we use * sign - note: avoid putting that on top 
app.get('/*', (req, res) => { 
    res.send('That is the GENERIC RESPONSE * ROUTE ')
})

// Express Routing Basics 

