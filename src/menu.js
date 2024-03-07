function menu(){
    const content = document.querySelector('#content');
    const heading = document.createElement('h1');
    heading.textContent = 'MENU';
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');
    const lunch = document.createElement('p');
    lunch.innerHTML = '<strong>Lunch</strong>';
    const lunchMenu = document.createElement('p');
    lunchMenu.innerHTML = '<strong>Hamachi</strong>   18   blood orange | miso<br>'+
                          '<strong>Castelfranco</strong>   17   ruby red grapefruit | pepitas<br>'+
                          '<strong>Forono beets</strong>   20   baley hazen blue | smoked breadcrumbs';
    menuContainer.appendChild(lunch);
    menuContainer.appendChild(lunchMenu);
    content.appendChild(heading);
    content.appendChild(menuContainer);
    /*const dinner = document.createElement('p');
    const dinnerMenu = document.createElement('p');*/
}

export default menu;