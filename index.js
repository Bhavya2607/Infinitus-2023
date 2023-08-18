const { innerHeight } = window;

// zoom-out
gsap.from("#main h2 img", {
    scale: 170, stagger: .20, duration: 10,
    scrollTrigger: {
        trigger: "#main",
        pin: true,
        end: `+=${innerHeight * 1.3}`,
        scrub: 0,
    }
});

document.addEventListener("mousemove", function(details){
    console.log(details)
    document.querySelectorAll(".img").forEach((elem) =>{
        const position = elem.getAttribute("value");
        var x = (window.innerWidth + details.clientX * position)/50;
        var y = (window.innerHeight + details.clientY * position)/50;
        elem.style.transform = `translateX(${x}px) translateY(${y}px) translate(-50%, -20%) rotate(-2deg)`
    })
})

let activeIndex = 0;

const groups = document.getElementsByClassName("card-group");

const handleLoveClick = () => {
  const nextIndex = activeIndex + 1 <= groups.length - 1 ? activeIndex + 1 : 0;
  
  const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
        nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);
        
  currentGroup.dataset.status = "after";
  
  nextGroup.dataset.status = "becoming-active-from-before";
  
  setTimeout(() => {
    nextGroup.dataset.status = "active";
    activeIndex = nextIndex;
  });
}

const handleHateClick = () => {
  const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : groups.length - 1;
  
  const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
        nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);
  
  currentGroup.dataset.status = "before";
  
  nextGroup.dataset.status = "becoming-active-from-after";
  
  setTimeout(() => {
    nextGroup.dataset.status = "active";
    activeIndex = nextIndex;
  });
}

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

document.querySelector("h1").onmouseover = event => {  
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 3;
  }, 30);
}

ScrollReveal().reveal('.text', { delay: 200, reset: true});
ScrollReveal().reveal('.img', { delay: 400, reset: true});
ScrollReveal().reveal('.img', { delay: 400, reset: true});
ScrollReveal().reveal('.img', { delay: 400, reset: true});
ScrollReveal().reveal('.img', { delay: 400, reset: true});
ScrollReveal().reveal('.img-mobile', { delay: 600, reset: true});
ScrollReveal().reveal('.img-mobile', { delay: 600, reset: true});

