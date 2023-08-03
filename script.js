const crsr = document.querySelector("#cursor");
const crsrBlur = document.querySelector("#cursor-blur");
const quotePara = document.querySelector("#quote-container p");
document.addEventListener("mousemove",function(dist){
  crsr.style.left = dist.x - 5 + "px";
  crsr.style.top = dist.y + 5 + "px";
  crsrBlur.style.left = dist.x - 150 + "px";
  crsrBlur.style.top = dist.y - 120 + "px";

})


gsap.to("#navbar",{
    backgroundColor:"#95c11e",
    height:"100px",
    duration:"0.01",
    scrollTrigger :{
        trigger:"#navbar",
        scrooler:"body",
        start:"top -10%",
        end:"top -15%",
        scrub:true
    }
})

gsap.to("#main", {
    backgroundColor:"#000",
    duration:"0.5",
    scrollTrigger :{
        trigger:"#main",
        scrooler:"body",
        start:"top -25%",
        end:"top -75%",
        scrub:3
    }
  })

gsap.from("#about-us-container",{
  opacity:0,
  y:100,
  duration:1,
  scrollTrigger:{
    trigger:"#about-us-container",
    scroller:"body",
    scrub:3,
    start:"top 80%",
    end:"top 60%"
  }
})


gsap.from("#hidden-text",{
  y:100,
  opacity:0,
  duration:1,
  scrollTrigger:{
    scroller:"body",
    trigger:"#hidden-text",
    scrub:3,
    start:"top 100%",
    end:"top 80%"
  }
})

gsap.from(".card ",{
  x:200,
  y:200,
  opacity:0,
  duration:0.5,
  scrollTrigger:{
    scroller:"body",
    trigger:".card",
    scrub:true,
    start:"top 80%",
    end:"top 75%",
  }
})


gsap.from("#first",{
  duration:0.5,
  x:40,
  y:40,
  scrollTrigger:{
    scroller:"body",
    trigger:"#first",
    scrub:true,
    start:"top 100%",
    end:"top 40%",
  }
})


gsap.from("#second",{
  duration:0.5,
  x:-20,
  y:-40,
  scrollTrigger:{
    scroller:"body",
    trigger:"#second",
    scrub:true,
    start:"top 100%",
    end:"top 60%",
  }
})


  const slide = document.querySelectorAll(".slider-img");
  const slideButton = document.querySelectorAll(".slider-button");
  let counter = 0;
 
  
function myRecursiveFunction() {
  b(counter);
  counter++
  if(counter>2)
  counter%=3;
  setTimeout(myRecursiveFunction, 3000);
}
myRecursiveFunction();

  function b(value){
  if(parseInt(value)==0){
    slideButton[0].classList.add('active');
    slideButton[1].classList.remove('active');
    slideButton[2].classList.remove('active');
    slide[parseInt(value)].style.zIndex = "99";
    slide[parseInt(value)+ + 1].style.zIndex = "0";
    slide[parseInt(value)+ + 2].style.zIndex = "0";
  }
  else if(parseInt(value)==1){
    slideButton[1].classList.add('active');
    slideButton[0].classList.remove('active');
    slideButton[2].classList.remove('active');
    slide[parseInt(value)].style.zIndex = "99";
    slide[parseInt(value)-1].style.zIndex = "0";
    slide[parseInt(value)+1].style.zIndex = "0";
  }
  else{
    slideButton[2].classList.add('active');
    slideButton[1].classList.remove('active');
    slideButton[0].classList.remove('active');
    slide[parseInt(value)].style.zIndex = "99";
    slide[parseInt(value)-1].style.zIndex = "0";
    slide[parseInt(value)-2].style.zIndex = "0";
  }
}

const quote = [
  "Absolutely loved the experience! The staff looked after me ensured I was enjoying the range and gave me helpful tips to get the best out of my game. Digital screens to see my progress. I’ll be back 😁 🏌🏽‍♀️",
  "Excellent couple of hours, relax and enjoy in the fun. Staff were accommodating, friendly and very helpful. Café on site for refreshments etc. Will keep children enterntained during the holidays. Worth a visit if you haven’t been.",
  "Pleasantly surprised to discover the mini golf is open until 10pm during weekdays 😊 Always enjoy visit here, cafe does some nice goodies too 👍🏽",
  "Definitely one of the best places to hit some golf balls, the TopTracer in most of the bays is a fantastic addition for the price! I’m yet to try the Mini golf but everyone seems to be having fun over there!"
]
let qouteCounter = 0;
const quoteIcons = document.querySelectorAll("#quote-container img"); 
function quoteChange(){
  quotePara.innerHTML = quote[qouteCounter];
    qouteCounter++;
    if(qouteCounter>3)
    qouteCounter %= 4;
    setTimeout(quoteChange,5000)
}

quoteChange();

