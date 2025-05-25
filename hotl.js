// book now functionality //

document.addEventListener("DOMContentLoaded", function () {
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1
      });

      document.querySelectorAll(".destination-header, .destination-card").forEach(el => {
        observer.observe(el);
      });
    });


    // hotelcard js
       function bookNow(hotelName) {
      alert("Redirecting to booking for: " + hotelName);
      // Add redirect or booking logic here
    }