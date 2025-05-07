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
      path.setAttribute('fill', 'red'); // 修改颜色
    };

    const icons = document.getElementsByClassName('icon');

    icons.onload = function () {
        console.log(icons);
        icons.forEach((icon) => {
          console.log(icon);
          const svgDoc = icon.contentDocument;
          const paths = svgDoc.querySelectorAll('path'); // 获取所有<path>元素
          paths.forEach(path => {
          path.setAttribute('fill', 'red'); // 修改填充颜色
        });}
          
        );
        
    };
  });
  