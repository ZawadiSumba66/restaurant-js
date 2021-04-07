const content = document.querySelector('#content')
const menu = () =>{
    const menuWrapper = document.createElement('div')
    const menuContent = document.createElement('span')
    menuWrapper.classList.add('text-center')
    menuContent.textContent = 'Burger..............700'
    menuWrapper.appendChild(menuContent)
    content.appendChild(menuWrapper)
}
// const listOne = menu('Burger..............700')
// const listTwo = menu('Burger..............700')
// const listThree = menu('Burger..............700')
// const listFour = menu('Burger..............700')

// const wrapper= document.createElement('div')
// wrapper.innerHTML += listOne + listTwo + listThree+listFour
export {menu} 
