function contact(){
    const content = document.querySelector('#content');
    const heading = document.createElement('h1');
    heading.textContent = 'CONTACT US';
    const contactInfo = document.createElement('p');
    contactInfo.classList.add('contact-info');
    contactInfo.innerHTML = '<strong>SAVOR HAVEN</strong><br>'+
                            '100 central st, New York, NY 10000<br>'+
                            'Tel: 000-000-0000<br>'+
                            '<hr><br>OPEN 24/7';
    
    content.appendChild(heading);
    content.appendChild(contactInfo);
}

export default contact;