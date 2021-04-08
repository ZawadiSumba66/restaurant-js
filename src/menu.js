const tabContent = document.querySelector('.tab-content')
const menu = (text) =>{
    const menuContent = document.createElement('span')
    menuContent.classList.add('d-flex','justify-content-start')
    menuContent.textContent = text
}
const listOne = menu('Burger..............700')
const listTwo = menu('Burger..............700')
const listThree = menu('Burger..............700')
const listFour = menu('Burger..............700')

const wrapper= document.createElement('div')
wrapper.innerHTML += listOne + listTwo + listThree+listFour
tabContent.appeendChild(wrapper)
export default menu 
