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
      paths.forEach(path => {
        path.setAttribute('fill', 'red'); // 修改填充颜色
        path.setAttribute('stroke', 'blue'); // 修改描边颜色
      });
    };
  });
  