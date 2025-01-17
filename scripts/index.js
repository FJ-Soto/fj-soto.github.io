"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const project_pic_class = ".project-images";
  const projects = document.querySelectorAll(project_pic_class);

  // group project pictures into a gallery
  for (let i = 1; i <= project_pic_class.length; i++) {
    Fancybox.bind(`#projects table:nth-of-type(${i}) ${project_pic_class} a`, {
      groupAll: true,
    });
  }
});
