const form = document.querySelector('#shelterForm')
const inputs = document.querySelector('#injuryNames')
const list = document.querySelector('#injuries')

form.addEventListener('submit', (e)=>{
    e.preventDefault(); 
    const injuryNames = inputs.value; // we took the value from the input field 
    const newLi = document.createElement('li') // made a new empty li 
    newLi.innerText = injuryNames; // the li is no longer empty 
    list.append(newLi); 
})