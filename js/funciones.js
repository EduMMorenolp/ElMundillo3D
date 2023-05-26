document.addEventListener("DOMContentLoaded", function () {

  const navbarLinks = document.querySelectorAll(".navbar-links li a");

  navbarLinks.forEach((link) => {
    link.addEventListener("mouseover", function () {
      navbarLinks.forEach((otherLink) => {
        if (otherLink !== link) {
          otherLink.classList.add("blurred");
        }
      });
    });

    link.addEventListener("mouseout", function () {
      navbarLinks.forEach((otherLink) => {
        if (otherLink !== link) {
          otherLink.classList.remove("blurred");
        }
      });
    });
  });
});
