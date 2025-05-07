document.addEventListener("DOMContentLoaded", function () {

    const object = document.getElementById('icon_see');

    object.onload = function () {
      console.log(icons);
      const svgDoc = object.contentDocument;
      const path = svgDoc.querySelector('path');
      path.setAttribute('fill', 'red'); // 修改颜色
    };

   
    const icons = document.getElementsByClassName('icon');

    (document.getElementById('modalities')).onload = function () {
        console.log(icons);
        icons.forEach((icon) => {
          console.log(icon);
          const svgDoc = icon.contentDocument;
          const paths = svgDoc.querySelectorAll('path'); // 获取所有<path>元素
          paths.forEach(path => {
          path.setAttribute('fill', 'red'); // 修改填充颜色
        });})
                
    };
  });
  