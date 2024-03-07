import home from './home.js';
import menu from './menu.js';
import contact from './contact.js';
import './style.css';
console.log('Restaurant webpage');

function loadSite(){
    home();
    const content = document.querySelector('#content');
    const homeButton = document.querySelector('.home');
    const menuButton = document.querySelector('.menu');
    const contactButton = document.querySelector('.contact');

    homeButton.addEventListener('click', ()=> {
        content.innerHTML = '';
        home();
    })

    menuButton.addEventListener('click', ()=>{
        content.innerHTML = '';
        menu();
    })

    contactButton.addEventListener('click', ()=>{
        content.innerHTML = '';
        contact();
    })
}

loadSite();