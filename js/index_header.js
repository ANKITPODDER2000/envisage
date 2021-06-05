const findtimeGap = () => {
    let a = new Date();
    let b = new Date("June 25, 2021 00:00:00");
    let sec = Math.round((b.getTime() - a.getTime()) / 1000)
    let min = Math.floor(sec / 60)
    sec = sec % 60;
    let hour = Math.floor(min / 60);
    min = min % 60;
    let day = Math.floor(hour / 24);
    hour = hour % 24;

    sec = sec < 0 ? 0 : sec;
    min = min < 0 ? 0 : min;
    hour = hour < 0 ? 0 : hour;
    day = day < 0 ? 0 : day;
    
    document.querySelector("#sectionone > div > div > span:nth-child(1) > h3").innerHTML =
        String(day).length == 2 ? String(day) : "0" + String(day);
        
    document.querySelector("#sectionone > div > div > span:nth-child(2) > h3").innerHTML =
        String(hour).length == 2 ? String(hour) : "0" + String(hour);
    
    document.querySelector("#sectionone > div > div > span:nth-child(3) > h3").innerHTML =
        String(min).length == 2 ? String(min) : "0" + String(min);
    
    document.querySelector("#sectionone > div > div > span:nth-child(4) > h3").innerHTML =
        String(sec).length == 2 ? String(sec) : "0" + String(sec);
    if(sec<=0 && min<=0 && hour<=0 && day<=0){
        clearInterval(interVal);
    }
}

let interVal = setInterval(findtimeGap , 1000);


// ztext.js
var header_text = new Ztextify(".img-per", {
   depth: "20px",
   layers: 20,
   fade: true,
   direction: "forwards",
   eventDirection :"reverse",
   event: "pointer",
   eventRotation: "25deg"
});

//Tilt js
VanillaTilt.init(document.querySelectorAll(".tilt_box"), {
    max: 20,
    speed: 400
});


//-----------------------------------

// const stage = document.querySelector("#sectionone > div.container");
// const fragment = document.createDocumentFragment();
// const grid = [20 , 20];
// const col  = grid[0];
// const row  = grid[1];
// const field = col * row;
// for(let i = 0 ; i < field ; i++){
//     const div = document.createElement('div');
//     fragment.appendChild(div);
//     div.className = "tail";
// }
// stage.appendChild(fragment);

// const stageAnimation = anime.timeline({
//     targets : ".tail",
//     easing : "easeInBack",
//     delay : anime.stagger(10 , {from : "last"}),
//     duration : 2000 , 
//     endDelay : 1000,
//     loop : true , 
//     autoplay : false,
// })
// .add({
//     translateX : () => anime.random(-250 , 250),
//     translateY : () => anime.random(-250 , 250),
//     delay : anime.stagger(200 , {grid : grid, from : "last"}),
//     scale : 0.5,
//     backgroundColor : "#2a2e64",
//     borderRadius : "50%",
// })
// .add({
//     targets : stage,
//     rotate : 180 ,
//     duration : 2000,
//     easing : 'easeOutBounce'
// })
// .add({
//     translateX : 0,
//     translateY : 0,
//     delay : anime.stagger(100 , {grid : grid , from : 'center'}),
//     duration : 3000,
//     backgroundColor : '#e01b5c'
// })
// .add({
//     translateX : [
//         {
//             value : anime.stagger('-.1em' , {
//                 grid : grid , from : 'first' , axis : 'x'
//             })
//         },
//         {
//             value : anime.stagger('.1em' , {
//                 grid : grid , from : 'first' , axis : 'x'
//             })
//         },
//         {
//             value : anime.stagger(0 , {
//                 grid : grid , from : 'first' , axis : 'x'
//             })
//         }
//     ],
//     translateY : [
//         {
//             value : anime.stagger('.1em' , {
//                 grid : grid , from : 'last' , axis : 'y'
//             })
//         },
//         {
//             value : anime.stagger('-.1em' , {
//                 grid : grid , from : 'last' , axis : 'y'
//             })
//         },
//         {
//             value : anime.stagger(0 , {
//                 grid : grid , from : 'last' , axis : 'y'
//             })
//         }
//     ],
//     delay : anime.stagger(100 , {grid : grid , from : 'last'}),
//     scale : .7,
//     backgroundColor : '#273849',
//     borderRadius : 0
// })
// .add({
//     translateX : [
//         {
//             value : anime.stagger('-5px' , {
//                 grid : grid , from : 'center' , axis : 'x'
//             })
//         },
//         {
//             value : anime.stagger('5px' , {
//                 grid : grid , from : 'center' , axis : 'x'
//             })
//         },
//         {
//             value : anime.stagger(0 , {
//                 grid : grid , from : 'center' , axis : 'x'
//             })
//         }
//     ],
//     translateY : [
//         {
//             value : anime.stagger('-5px' , {
//                 grid : grid , from : 'center' , axis : 'y'
//             })
//         },
//         {
//             value : anime.stagger('5px' , {
//                 grid : grid , from : 'center' , axis : 'y'
//             })
//         },
//         {
//             value : anime.stagger(0 , {
//                 grid : grid , from : 'center' , axis : 'y'
//             })
//         }
//     ],
//     delay : anime.stagger(100 , {grid : grid , from : 'center'}),
//     scale : 1,
//     backgroundColor : '#14ffeb1a',
// })
// stageAnimation.play();