
const form = document.querySelector('form');
const proValue = document.querySelector('#product');
const qtyValue = document.querySelector('#qty');
const list = document.querySelector('#list');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const newInput = `${qtyValue.value} ${proValue.value}`;
    const newLi = document.createElement('li');
    newLi.innerText = newInput;
    list.append(newLi);
});