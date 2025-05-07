document.addEventListener("DOMContentLoaded", function () {

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
  