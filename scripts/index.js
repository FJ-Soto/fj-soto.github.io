"use strict";

const bindPictures = () => {
  const project_pic_class = ".project-images";

  // group project pictures into a gallery
  for (let i = 1; i <= project_pic_class.length; i++) {
    Fancybox.bind(
      `#projects table:nth-of-type(${i}) ${project_pic_class} img`,
      {
        groupAll: true,
      }
    );
  }
};

const smoothScrollRelativeLinks = () => {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });

      document.location = `${this.getAttribute("href")}`;
    });
  });
};

document.addEventListener("DOMContentLoaded", function () {
  bindPictures();
  smoothScrollRelativeLinks();
});
