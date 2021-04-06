import burger from './burger.png'
const content = document.querySelector('#content')

const navbar = () =>{
  const nav = document.createElement('nav');
  nav.classList.add('nav-bar')
  const left = document.createElement('div')
  left.textContent ='JAVAHOUSE'
  left.style.color ="white"
  const right = document.createElement('button')
  right.innerHTML = '<i class="fas fa-bars"></i>';
  right.style.color ="white"
  nav.appendChild(left)
  nav.appendChild(right)
  content.appendChild(nav)
}

const showcase = () => {
  const main = document.createElement('div');
  main.classList.add('showcase')
  const heading = document.createElement('h1')
  heading.classList.add('head')
  heading.textContent="JAVAHOUSE"
  const showcaseContent = document.createElement('p')
  showcaseContent.textContent = "Come and experience exquisite delicacies at JAVA HOUSE at fantastic prices. Available for pickup at branches or deliveries from Jumia food, Glovo and Uber Eats"
  const offerButton = document.createElement('button')
  offerButton.textContent ='Special offers'
  heading.style.color ="white"
  main.style.background = `url(${burger})`;
  main.style.backgroundRepeat = 'no-repeat';
  main.style.backgroundSize = 'cover';
  main.appendChild(heading)
  main.appendChild(showcaseContent)
  main.appendChild(offerButton)
  content.appendChild(main);
}

export {navbar, showcase}
