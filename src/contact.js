const content = document.querySelector('#content')

const contact = ()=> {
    const social = document.createElement('div')
    social.classList.add('text-center')
    const details = document.createElement('p')
    details.textContent = 'Reach us though'
    const twitter = document.createElement('a')
    twitter.innerHTML= '<i class="fab fa-twitter"></i>'
    const facebook = document.createElement('a')
    facebook.innerHTML= '<i class="fab fa-facebook-square"></i>'
    const instagram = document.createElement('a')
    instagram.innerHTML= '<i class="fab fa-instagram"></i>'
    social.appendChild(details)
    social.appendChild(twitter)
    social.appendChild(facebook)
    social.appendChild(instagram)
    content.appendChild(social)
}

export default contact