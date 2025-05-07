document.addEventListener("DOMContentLoaded", function () {
   
    // 获取所有<object>元素
    const iconObjects = document.querySelectorAll('#modalities object');

    function lockScrollDuringAnimation({ selector, animationType, duration = 1000 }) {
      document.addEventListener("DOMContentLoaded", function () {
        const elements = document.querySelectorAll(selector);
        console.log("screen block");
    
        elements.forEach((element) => {
          if (element.dataset.aos === animationType) {
            element.addEventListener("aos:in", function () {
              document.body.style.overflow = "hidden"; // Disable scrolling
              setTimeout(() => {
                console.log("screen blocked");
                document.body.style.overflow = ""; // Re-enable scrolling after animation duration
              }, duration);
            });
          }
        });
      });
    }

    lockScrollDuringAnimation({
      selector: "#modalities",   // ID or class (e.g., ".section")
      animationType: "fade-up",      // AOS animation type (e.g., "fade-up", "zoom-in", etc.)
      duration: 1200                 // Animation duration in milliseconds
    });
    

    // 遍历每个<object>元素
    iconObjects.forEach(object => {
      // 等待SVG加载完成
      object.onload = function () {
        const svgDoc = object.contentDocument; // 获取SVG文档
        const paths = svgDoc.querySelectorAll('path'); // 获取所有<path>元素

        // 遍历所有<path>元素并修改颜色
        paths.forEach(path => {
          path.setAttribute('fill', 'red'); // 修改填充颜色
        });
      };
    });
  });
  