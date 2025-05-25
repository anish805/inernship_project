window.addEventListener('scroll', function() {
      const btn = document.getElementById('backToTop');
      if (window.scrollY > 300) {
        btn.style.display = 'flex';
      } else {
        btn.style.display = 'none';
      }
    });

    // Smooth scroll to top on click
    document.getElementById('backToTop').addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });