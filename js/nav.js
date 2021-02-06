const overlay = document.querySelector("body > nav > div.overlay");
const handburger = document.querySelector("body > nav > div.handburger");
const cursor = document.querySelector("body > nav > div.overlay > .cursor");

const toggleActive = () => {
    handburger.classList.toggle('active');
    overlay.classList.toggle('active');
}

const movemouse = e => {
    // console.log(e.clientX , e.pageX)
    cursor.style.left = (e.clientX - (window.innerWidth - overlay.offsetWidth)) + "px";
    cursor.style.top = e.clientY + "px";
}


const mousein = t => {
    // t.style.mixBlendMode = 'difference';
    cursor.classList.add('active');
}
const mouseout = t => {
    // t.style.mixBlendMode = 'none';
    cursor.classList.remove('active');
}