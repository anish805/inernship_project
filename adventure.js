function openModal() {
      document.getElementById("imageModal").style.display = "flex";
    }

    function closeModal() {
      document.getElementById("imageModal").style.display = "none";
    }

    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".left-content", {
      scrollTrigger: {
        trigger: ".left-content",
        start: "top 80%",
        toggleActions: "play none none none"
      },
      x: -100,
      opacity: 0,
      duration: 1
    });

    gsap.from(".right-content", {
      scrollTrigger: {
        trigger: ".right-content",
        start: "top 80%",
        toggleActions: "play none none none"
      },
      x: 100,
      opacity: 0,
      duration: 1
    });

    gsap.from(".circle-button-container", {
      scrollTrigger: {
        trigger: ".right-content",
        start: "top 80%",
        toggleActions: "play none none none"
      },
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.3
    });