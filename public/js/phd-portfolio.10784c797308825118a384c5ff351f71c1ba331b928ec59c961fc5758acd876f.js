document.addEventListener("DOMContentLoaded", function () {

  
    const object = document.getElementsByClassName('icon');

    object.onload = function () {
      const svgDoc = object.contentDocument;
      const paths = svgDoc.querySelectorAll('path'); // 获取所有<path>元素
      paths.forEach(path => {
        path.setAttribute('fill', 'red'); // 修改填充颜色
      });
    };

    
  });
  