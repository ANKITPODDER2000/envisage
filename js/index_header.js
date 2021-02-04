var scene = document.getElementById("scene");
var parallaxInstance = new Parallax(scene);

const findtimeGap = () => {
    let a = new Date();
    let b = new Date("March 1, 2021 00:00:00");
    let sec = Math.round((b.getTime() - a.getTime()) / 1000)
    let min = Math.floor(sec / 60)
    sec = sec % 60;
    let hour = Math.floor(min / 60);
    min = min % 60;
    let day = Math.floor(hour / 24);
    hour = hour % 24;
    
    document.querySelector("#scene > div.logo > div > span:nth-child(1) > h3").innerHTML =
        String(day).length == 2 ? String(day) : "0" + String(day);
        
    document.querySelector("#scene > div.logo > div > span:nth-child(2) > h3").innerHTML =
        String(hour).length == 2 ? String(hour) : "0" + String(hour);
    
    document.querySelector("#scene > div.logo > div > span:nth-child(3) > h3").innerHTML =
        String(min).length == 2 ? String(min) : "0" + String(min);
    
    document.querySelector("#scene > div.logo > div > span:nth-child(4) > h3").innerHTML =
        String(sec).length == 2 ? String(sec) : "0" + String(sec);
}

setInterval(findtimeGap , 1000)