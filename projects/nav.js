


 document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".mirror-navbar");
    const navToggle = document.querySelector("#nav-toggle");
    const navMenu = document.querySelector("#side-nav");

    if (navToggle && navMenu) {
      navToggle.addEventListener("click", () => {
        navToggle.classList.toggle("active");
        navMenu.classList.toggle("open");
      });

      navMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
          navToggle.classList.remove("active");
          navMenu.classList.remove("open");
        });
      });
    }

    if (navbar) {
      const updateNavbar = () => {
        navbar.classList.toggle("scrolled", window.scrollY > 40);
      };

      updateNavbar();
      window.addEventListener("scroll", updateNavbar, { passive: true });
    }
  });