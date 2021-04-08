
const contact = ()=> {
    const tabContent = document.querySelector('.tab-content')
    const social = document.createElement('div')
    social.classList.add('text-center')
    const details = document.createElement('p')
    details.textContent = 'Reach us though'
    const twitter = document.createElement('div')
    twitter.innerHTML= '<i class="fab fa-twitter"></i>'
    const facebook = document.createElement('div')
    facebook.innerHTML= '<i class="fab fa-facebook-square"></i>'
    const instagram = document.createElement('div')
    instagram.innerHTML= '<i class="fab fa-instagram"></i>'
    social.appendChild(details)
    social.appendChild(twitter)
    social.appendChild(facebook)
    social.appendChild(instagram)
    tabContent.appendChild(social)
}

export default contact