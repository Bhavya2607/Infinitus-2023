const { innerHeight } = window;

// zoom-out
gsap.from("#main h2 img", {
    scale: 200, stagger: .20, duration: 5,
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

let index = 0,
    interval = 1000;

const rand = (min, max) => 
  Math.floor(Math.random() * (max - min + 1)) + min;

const animate = star => {
  star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
  star.style.setProperty("--star-top", `${rand(-40, 80)}%`);

  star.style.animation = "none";
  star.offsetHeight;
  star.style.animation = "";
}

for(const star of document.getElementsByClassName("magic-star")) {
  setTimeout(() => {
    animate(star);
    
    setInterval(() => animate(star), 1000);
  }, index++ * (interval / 3))
}


const trailer = document.getElementById("trailer");

const animateTrailer = (e, interacting) => {
  const x = e.clientX - trailer.offsetWidth / 2,
        y = e.clientY - trailer.offsetHeight / 2;
  
  const keyframes = {
    transform: `translate(${x}px, ${y}px) scale(${interacting ? 8 : 1})`
  }
  
  trailer.animate(keyframes, { 
    duration: 800, 
    fill: "forwards" 
  });
}

const getTrailerClass = type => {
  switch(type) {
    case "video":
      return "fa-solid fa-play";
    default:
      return "fa-solid fa-arrow-up-right"; 
  }
}

window.onmousemove = e => {
  const interactable = e.target.closest(".interactable"),
        interacting = interactable !== null;
  
  const icon = document.getElementById("trailer-icon");
  
  animateTrailer(e, interacting);
  
  trailer.dataset.type = interacting ? interactable.dataset.type : "";
  
  if(interacting) {
    icon.className = getTrailerClass(interactable.dataset.type);
  }
}



ScrollReveal().reveal('.theme-h', { delay: 200, reset: true});
ScrollReveal().reveal('.theme-t', { delay: 200, reset: true});
ScrollReveal().reveal('.img1', { delay: 400, reset: true});
ScrollReveal().reveal('.img2', { delay: 400, reset: true});
ScrollReveal().reveal('.img3', { delay: 400, reset: true});
ScrollReveal().reveal('.img4', { delay: 400, reset: true});
ScrollReveal().reveal('.img-mobile', { delay: 600, reset: true});
ScrollReveal().reveal('.prizepool-h', { delay: 200, reset: true});
ScrollReveal().reveal('.prizepool-t', { delay: 200, reset: true});
ScrollReveal().reveal('.card-swiper', { delay: 200, reset: true});

