
const express = require('express')
const app = express(); 
// now, to link the directory to the view folder so that we can have access to the views folder from a parent directory, we first need to
// require the path as below: 
const path = require('path');
const redditData = require('./data.json')
console.log(redditData)

// serving static assets in Express 
app.use(express.static(path.join(__dirname, 'public'))) // public is the name of the public directory 

// .set method accetps 2 arguments; name and a value - http://expressjs.com/en/api.html#app.set
app.set("view engine", 'ejs'); 
// the (__dirname) refers to the directory name where index.js is located and it does not care where I'm executing it from. 
app.set('views', path.join(__dirname, '/views')); // this links the directory name where this file is located (index.js) and then we 
// are joining that path with the views. Now, we can execute the index.js file from the General_practice directory which is the parent
// directory of Templating_Demo using => nodemon Templating_Demo/index.js


app.get('/', (req, res) => {
    res.render('home') // res.render method passes file of choice, in this case, its home.ejs - we don't need to specify it to home.ejs beccause we set that up in line 6
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params; 
    const data = redditData[subreddit]; // we want to connect subreddit to req.params 
    console.log(data)
    res.render('subreddit', { ...data })
})

app.get('/cats', (req, res) => {
    const cats = [
        'Blue', 'Rocket', 'Monty', 'Stephanie', 'Winston'
    ]
    res.render('cats', { cats })
})

// EJS Intropolation Syntax session 
app.get('/rand', (req, res) =>{
    const num = Math.floor(Math.random() * 10) + 1;
    res.render("random", { rand : num }) // random here is the template file => random.ejs - The object { rand: num } it says, whenever 
    // num will be available in my template under the name 'rand'
})

app.listen(3000, () => {
    console.log("Listening on port 3000")
})


