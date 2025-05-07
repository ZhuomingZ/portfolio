document.addEventListener("DOMContentLoaded", function () {
   
    // 获取所有<object>元素
    const iconObjects = document.querySelectorAll('#modalities object');

    function changeObjectSvgPathColor({ selector, startColor, endColor, duration = 1000,  delay = 0 }) {
      const iconObjects = document.querySelectorAll(selector);
    
      iconObjects.forEach(object => {
        object.onload = function () {
          const svgDoc = object.contentDocument; // 获取SVG文档
          if (!svgDoc) return;
    
          const elements = svgDoc.querySelectorAll('path, rect'); // 选择所有<path>和<rect>
    
          elements.forEach(el => {
            el.setAttribute('fill', startColor); // 设置初始颜色
            el.style.transition = `fill ${duration}ms ease-in-out`;
    
            setTimeout(() => {
              el.setAttribute('fill', endColor); // 变更颜色
            }, delay);
          });
        };
      });
    }
    

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
/*
    lockScrollDuringAnimation({
      selector: "#touch_missing",   // ID or class (e.g., ".section")
      animationType: "fade-up",      // AOS animation type (e.g., "fade-up", "zoom-in", etc.)
      duration: 1200                 // Animation duration in milliseconds
    });
*/
    
    changeObjectSvgPathColor({
      selector: "object.icon_green", // 选择所有带有 class="icon" 的 <object> 元素
      startColor: "white",
      endColor: "#1ed760",
      duration: 1000
    });
    changeObjectSvgPathColor({
      selector: "object.icon_red", // 选择所有带有 class="icon" 的 <object> 元素
      startColor: "white",
      endColor: "red",
      duration: 1000,
      delay: 0      // 延迟时间 (毫秒)
    });

  

    let currentSlide = 0;

    function moveToSlide(slideIndex, totalSlides) {
      const carousel = document.querySelector('.multipage');
      currentSlide = slideIndex;
      carousel.style.transform = `translateX(-${slideIndex * 100 / totalSlides}%)`;
      console.log(currentSlide);
      // Update active dot
      document.querySelectorAll('.navigation-dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === slideIndex);
      });
    }
    
    setInterval(() => {
      const totalSlides = 3;
      currentSlide = (currentSlide + 1) % totalSlides; // Cycle through slides
      moveToSlide(currentSlide, totalSlides);
    }, 3000); // Change every 3s

    
    

  });
  