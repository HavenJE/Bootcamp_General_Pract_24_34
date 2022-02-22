
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
const fetchTvShows = async () => {
    try {
        const res = await fetch('https://api.tvmaze.com/search/shows?q=girls');
   console.log(res)
   const data = await res.json(); 
   console.log(data)
   console.log(data[0].show.url)
    } catch(e) {
        console.log("Error!", e)
    }
   
} 
 