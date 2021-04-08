import * as main from './home'
import menu from './menu.js'
import about from './about.js';
import contact from './contact.js'
import './style.css';
main.navbar()
main.showcase()  
main.tabsToggle()
menu();
main.footer()
const tabContent = document.querySelector('.tab-content');
const tabItem = document.querySelectorAll('.tab')
const tabDetails = [menu,about,contact]
const selectItem = (index) =>{
    tabContent.innerHTML = '';
    tabItem.forEach(item => {
        item.classList.remove('show');
    });

    tabItem[index].classList.add('show');
    tabDetails[index]()
}

for (let i = 0; i < tabItem.length; i += 1) {
   tabItem[i].onclick = selectItem.bind(null, i);
} 