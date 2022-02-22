
// fetch('https://api.tvmaze.com/search/shows?q=girls')

const form = document.querySelector('#searchForm')
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    console.log('Submitted! The form is working')
    // console.dir(form)
    console.log(form.elements.query.value)
    const searchTerm = form.elements.query.value;
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);
    // console.log(res.data)
    // console.log(res.data[0].show.image.medium)
    makeImages(res.data)
    form.elements.query.value = ''; 
})

const makeImages = (shows) => {
    for (let result of shows) {
        console.log(result)
        if (result.show.image) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.body.append(img)
        }

    }
}


// 1. created a form with input and buttom fields
// 2. add event listener and test that with console.log('submitted is working)
// 3. Extract whatever the user writes in the input field using; console.dir(form), then from that list, you can check the elements.query.value
// 4. Save that into a variable e.g. searchTerm
// 5. Now, we need to make our API call, adding the searchTerm in string intropolation, save that into a variable and adding the async and await.
// 6. console.log(res.data)
// 7. when successful in console.logging the data, say you want to get the image with the medium size, => console.log(res.data[0].show.image.medium)
// 8. now, if you want to display that image, you need to create an element for that image, then save it to a variable
// 9. set the img.src
// 10. display the img on the body using; document.body.append
// 11. now, let loop over all the data array to get all the result 
// 12. make sure to put an if logic in case one the shows does not have an image to avoid console errors 
// 13. now we need to empty our form using; form.elements.query.value = ''; 