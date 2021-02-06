const overlay = document.querySelector("body > nav > div.overlay");
const handburger = document.querySelector("body > nav > div.handburger");
const toggleActive = () => {
    handburger.classList.toggle('active');
    overlay.classList.toggle('active');
}