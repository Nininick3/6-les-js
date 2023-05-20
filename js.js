let form = document.querySelector('form');
let p = document.getElementById('1');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let name = document.getElementById('name').value;
    p.innerHTML = "Your name " + name;
    console.log(name.value);
});