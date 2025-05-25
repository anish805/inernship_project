AOS.init({ duration: 1000, once: true });

    // Initialize VanillaTilt on all .tilt-card elements
    VanillaTilt.init(document.querySelectorAll(".tilt-card"), {
      max: 25,
      speed: 400,
      glare: true,
      "max-glare": 0.3,
    });