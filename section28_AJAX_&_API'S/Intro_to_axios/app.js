// Method 1 - The Promise version where you have a multiple requests in a series 

// fetch('https://api.tvmaze.com/search/shows?q=girls')
// .then(res =>{
//     console.log("RESPONSE  is waiting to parse", res)
//     // here we need to add the 2ed promise of JSON 
//     return res.json() // when all data is back and has been parsed as json, 
// })
// .then(data =>{
//     console.log('DATA PARSED', data)
//     console.log(data[0])
//     console.log(data[0].show.url)

// })
// .catch(e =>{
//     console.log("Oh no, error!", e)
// })

// Method 2 - This is the Async Function - for this method, if you need to catch any errors, the logic should be wrapped 
// with try and catch 

// const fetchTvShows = async () => {
//     try {
//         const res = await fetch('https://api.tvmaze.com/search/shows?q=girls');
//    console.log(res)
//    const data = await res.json(); 
//    console.log(data)
//    console.log(data[0].show.url)
//     } catch(e) {
//         console.log("Error!", e)
//     }
// } 

// ('https://api.tvmaze.com/search/shows?q=girls') 

// axios.get('https://api.tvmaze.com/search/shows?q=girls')
// .then(res =>{
//     console.log(res.data)
//     console.log(res.data[0])
//     console.log(res.data[0].show)
//     console.log(res.data[0].show.url)
// }).catch(err =>{
//     console.log("ERROR", err)
// })

// const fetchTvShows = async () => {
//     try {
//         const res = await axios.get('https://api.tvmaze.com/search/shows?q=girls')
//             console.log(res.data)
//             console.log(res.data[0])
//             console.log(res.data[0].show)
//             console.log(res.data[0].show.url)
//         } catch (err) {
//             console.log("ERROR", err)
//         }
// }

// Setting Headers with Axios 

// const fetchDadJokes = async () => {
//     // In case we dealing with API that requires adding a header separatly 
//     const config = {
//         headers: { Accept: 'application/json' }
//     }
//     // After saving the header in a variable, we're adding it as a 2ed argument to the http url 
//     const res = await axios.get('https://icanhazdadjoke.com/', config)
//     console.log(res)
//     console.log(res.data)
//     console.log(res.data.joke)
// }

// Now, we are going to use some DOM manipulation to append these jokes into a ul 

const jokes = document.querySelector('#jokes');
const button = document.querySelector('button')


const addNewJoke = async () => {
    const jokeText = await fetchDadJokes();
    const newLi = document.createElement('LI');
    newLi.append(jokeText);
    jokes.append(newLi); 
}
const fetchDadJokes = async () => {
    try {
        const config = {
            headers: { Accept: 'application/json' }
        }
        const res = await axios.get('https://icanhazdadjoke.com/', config)
        console.log(res.data.joke)
        return res.data.joke
    } catch(err) {
        console.log("No jokes available for now, sorry 😒", err)
    }
    
}
// make sure you put the addEventListner after where the addNewJoke function has been defined 
button.addEventListener('click', addNewJoke)