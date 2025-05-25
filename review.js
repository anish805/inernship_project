//  AOS.init();

//     const cards = document.querySelectorAll(".testimonial-section .card");
//     const dots = document.querySelectorAll(".testimonial-section .dot");
//     const carousel = document.getElementById("carousel");
//     let currentSlide = 0;

//     function showSlide(index) {
//       currentSlide = index;
//       cards.forEach((card, i) => {
//         card.classList.toggle("active", i === index);
//         card.classList.toggle("dimmed", i !== index);
//       });
//       dots.forEach((dot, i) => {
//         dot.classList.toggle("active", i === index);
//       });
//       cards[index].scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
//     }

//     setInterval(() => {
//       currentSlide = (currentSlide + 1) % cards.length;
//       showSlide(currentSlide);
//     }, 3000);

//     showSlide(0);