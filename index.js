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