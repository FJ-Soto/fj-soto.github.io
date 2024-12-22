const scrollNavigation = () => {
  const navBar = document.getElementById("nav-bar");
  const navHeight = parseInt(getComputedStyle(navBar).height);
  if (window.scrollY > navHeight) {
    navBar.classList.add("scrolled");
  } else {
    navBar.classList.remove("scrolled");
  }
};

document.addEventListener("scroll", scrollNavigation);
