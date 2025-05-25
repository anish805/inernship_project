
  
    gsap.registerPlugin(ScrollTrigger);

    // Animate heading and subheading
    gsap.to(".feature-heading", {
      scrollTrigger: {
        trigger: ".feature-heading",
        start: "top 80%",
      },
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out"
    });

    gsap.to(".feature-subheading", {
      scrollTrigger: {
        trigger: ".feature-heading",
        start: "top 80%",
      },
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 0.2,
      ease: "power3.out"
    });

    // Animate cards with fade + scale + rise
    gsap.to(".feature-card", {
      scrollTrigger: {
        trigger: ".features",
        start: "top 85%",
        toggleActions: "play none none reverse"
      },
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "back.out(1.7)"
    });

    // Floating effect
    document.querySelectorAll(".feature-card").forEach((card, i) => {
      gsap.to(card, {
        y: -5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        duration: 2 + i * 0.1,
        delay: 1.5 + i * 0.1,
      });
    });
