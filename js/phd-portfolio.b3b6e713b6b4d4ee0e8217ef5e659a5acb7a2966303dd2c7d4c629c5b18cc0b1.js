document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".phd-section");
  
    function revealSections() {
      let scrollY = window.scrollY + window.innerHeight * 0.8;
      sections.forEach((section) => {
        if (scrollY > section.offsetTop) {
          section.classList.add("visible");
        }
      });
    }
  
    window.addEventListener("scroll", revealSections);
    revealSections(); // Run on load


    const object = document.getElementById('icon_see');

    object.onload = function () {
      const svgDoc = object.contentDocument;
      const path = svgDoc.querySelector('path');
      path.setAttribute('fill', 'blue'); // 修改颜色
    };
  });
  