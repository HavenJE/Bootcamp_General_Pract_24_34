

// fakeRequestPromise('yelp.com/api/coffee/page1')
// .then((data)=> {
//     console.log('My promise is working! 1')
//     console.log(data)
//     return fakePromise('yelp.com/api/coffee/page1')
// })
// .then((data)=>{
//     console.log('My promise is working! 2')
//     console.log(data)
//     return fakePromise('yelp.com/api/coffee/page2')
// })
// .then((data)=>{
//     console.log('My promise is working! 3')
//     console.log(data)
// })
// .catch((err)=>{
//     console.log('Ooh! Error, not again!')
// })

// const fakeRequest = (url) => {
//     return new Promise((resolved, rejected) => {
//         setTimeout(() => {
//             resolved();
//             if resolved
//         }, 1000)
//     })
// }
// fakeRequest('/dogs/1')
// .then(()=>{
//     console.log('Fake request is working')
// })

// Asynec Promise 

// const promise = async () => {
//     return "Asynec is working"
// }
// promise().then((data)=>{
//     console.log("data", data)
// })

// The await keyword 

const colorChange = (newColor, delay) => {
    return new Promise((resolved, rejected) => {
        setTimeout(() => {
            document.body.style.backgroundColor = newColor;
            resolved();
        }, delay)
    })
}
async function colorful() {
    await colorChange("green", 1000)
    await colorChange("blue", 1000)
}
colorful().then(() => {
    console.log('it worked!')
})