const overlay = document.querySelector("body > nav > div.overlay");
const handburger = document.querySelector("body > nav > div.handburger");
const cursor = document.querySelector("body > nav > div.overlay > .cursor");
const scroll_btn = document.querySelector("body > div.slidetop");

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
    //t.style.mixBlendMode = 'difference';
    cursor.classList.add('active');
}
const mouseout = t => {
    //t.style.mixBlendMode = 'none';
    cursor.classList.remove('active');
}

const isneedtoscrollup = () => {
    if(window.scrollY > 400){
        scroll_btn.classList.add('active');
    }else{
        scroll_btn.classList.remove('active');
    }
}