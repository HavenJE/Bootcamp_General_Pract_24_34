

container = document.querySelector('#container')
// in order to set the source (src) to be dynamic, we set that to a variable e.g. baseURL 
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

for (let i = 1; i <= 151; i++) {
    const pokemon = document.createElement('div') 
    const label = document.createElement('span')
    label.innerText = i;

    const newIMG = document.createElement('img')
    newIMG.src = `${baseURL}${i}.png`

    // the pokeomon div now needs to append the img & the label 
    pokemon.appendChild(newIMG)
    pokemon.appendChild(label)

    // The container is going to host the pokemon which hosts both the img & the label 
    container.appendChild(pokemon)
}

// so now we want to make things look better by putting the pokemon image and the number inderneath it within a 'div'- to do so, 
// we need to create an element as a div, then we do the same for a <span> 

