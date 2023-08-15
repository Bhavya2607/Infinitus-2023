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
        var x = (window.innerWidth - details.clientX * position)/50;
        var y = (window.innerHeight - details.clientY * position)/50;
        elem.style.transform = `translateX(${x}px) translateY(${y}px) translate(-50%, 0%) rotate(-2deg) `
    })
})