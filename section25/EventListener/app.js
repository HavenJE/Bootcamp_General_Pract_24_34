
const btn = document.querySelector('#v2')

btn.onclick = function(){
    console.log('Its working!!')
}

const btn3 = document.querySelector('#v3')
btn3.addEventListener('click', ()=>{
    alert('Add Event Listener is working!!')
    console.log('Add Event Listener is working!!')
    
})

const bt4 = document.querySelector('#yas')

const yall = () => {
    console.log("YALL")
}

const shout = () => {
    console.log("SHOUT")
}

// bt4.onclick = yall;
// bt4.onclick = shout;

// To call both functions together - but yall only once 
bt4.addEventListener('click', yall, {once : true})
bt4.addEventListener('click', shout)

window.addEventListener('keydown', function (e) {

    console.log(e.code)}) 