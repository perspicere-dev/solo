function toggleMenu(visible) {
    document.querySelector('.sidebar').classList.toggle('reveal', visible)
  }





  document.querySelector('.hamburger').addEventListener('click', function(e) {
    e.preventDefault();
    toggleMenu()
  });

