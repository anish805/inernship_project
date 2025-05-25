function subscribe() {
    const email = document.getElementById('emailInput').value;
    if (email) {
      alert(`Thanks for subscribing with: ${email}`);
      document.getElementById('emailInput').value = '';
    } else {
      alert('Please enter a valid email address.');
    }
  }

