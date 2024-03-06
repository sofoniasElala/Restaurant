import descImage from '../assets/images/jason-leung-poI7DelFiVA-unsplash.jpg';
function home (){
    const content = document.querySelector('#content');
    const heading = document.createElement('h1');
    const description = document.createElement('p');
    const descriptionImage = document.createElement('img');
    heading.textContent = 'Savor Haven';
    description.textContent = 'Savor Haven offers a delightful blend of culinary delights, bringing together flavors from around the world to create a unique and unforgettable dining experience. From savory appetizers to mouthwatering entrees and decadent desserts, every dish is crafted with care and passion, promising a journey of taste sensations that will leave you craving for more.';
    descriptionImage.setAttribute('src', descImage);
    content.appendChild(heading);
    content.appendChild(description);
    content.appendChild(descriptionImage);
}
export default home;