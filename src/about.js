const content = document.querySelector('#content')
const about= ()=>{
    const info = document.createElement('div');
    info.classList.add('text-center')
    info.textContent ='Java House, commonly referred to as \‘Nairobi Java\’,opened itsfirst store in 1999 at Adam’s Arcade in Nairobi. With the aim of introducing gourmet'
    content.appendChild(info)
}

export default about