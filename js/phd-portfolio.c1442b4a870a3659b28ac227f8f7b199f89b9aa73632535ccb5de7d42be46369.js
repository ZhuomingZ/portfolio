document.addEventListener("DOMContentLoaded", function () {
   
    // 获取所有<object>元素
    const iconObjects = document.querySelectorAll('#modalities object');

    function changeColor({ selector, startColor, endColor, duration = 1000 }) {
      document.addEventListener("DOMContentLoaded", function () {
        const elements = document.querySelectorAll(selector);
    
        elements.forEach((element) => {
          element.style.transition = `color ${duration}ms ease-in-out, background-color ${duration}ms ease-in-out`;
          element.style.color = startColor;
          element.style.backgroundColor = "transparent"; // Ensure background transition works
          
          setTimeout(() => {
            element.style.color = endColor;
            element.style.backgroundColor = "transparent";
          }, 10); // Small delay to allow transition to take effect
        });
      });
    }
    

    function lockScrollDuringAnimation({ selector, animationType, duration = 1000 }) {
    
      
      const elements = document.querySelectorAll(selector);
        
      elements.forEach((element) => {
        if (element.dataset.aos === animationType) {
          // Observe changes in class list (AOS applies classes dynamically)
          
          const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
              
              if (mutation.attributeName === "class" && element.classList.contains("aos-animate")) {
                document.documentElement.style.overflow = "hidden";
                document.body.style.overflow = "hidden";
  
                setTimeout(() => {
                  // Re-enable scrolling
                  document.documentElement.style.overflow = "";
                  document.body.style.overflow = "";
                }, duration);
              }
            });
          });
  
          observer.observe(element, { attributes: true }); // Watch for class changes
        }
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
  