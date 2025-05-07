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
  
    const icons = document.getElementsByClassName('icon');

    icons.onload = function () {
      icons.forEach((element) => 
        const svgDoc = element.contentDocument;
        const paths = svgDoc.querySelectorAll('path'); // 获取所有<path>元素
        paths.forEach(path => {
        path.setAttribute('fill', 'red'); // 修改填充颜色
      });
      );
      
    };

    
  });
  