const about= ()=>{
    const tabContent = document.querySelector('.tab-content')
    const info = document.createElement('div');
    info.classList.add('text-center')
    info.textContent ='Java House, commonly referred to as \‘Nairobi Java\’,opened itsfirst store in 1999\nat Adam’s Arcade in Nairobi. With the aim of introducing gourmet'
    tabContent.appendChild(info)
}

export default about 