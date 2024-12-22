const scrollNavigation = () => {
  const style = window.getComputedStyle(document.body);
  const scrollTriggerHeight = +style
    .getPropertyValue("--nav-bar-height")
    .slice(0, -2);
  const navBar = document.getElementById("nav-bar");
  if (window.scrollY > scrollTriggerHeight) {
    navBar.classList.add("scrolled");
  } else {
    navBar.classList.remove("scrolled");
  }
};

document.addEventListener("scroll", scrollNavigation);
