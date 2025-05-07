document.addEventListener("DOMContentLoaded", function () {
   
    // 获取所有<object>元素
    const iconObjects = document.querySelectorAll('#modalities object');

    function changeSvgColorAfterAOS({ selector, startColor, endColor, duration = 500, delay = 0 }) {
    
      document.addEventListener('aos:in', function(event) {
        const targetElement = event.detail; // The element that just animated
        if (!targetElement.matches(selector)) return; // Only apply to the specified selector
    
        const aosDuration = parseInt(targetElement.getAttribute("data-aos-duration")) || 1000; // Default 1000ms
        const totalDelay = aosDuration + delay; // Ensure it runs AFTER AOS animation + extra delay
    
        const iconObjects = targetElement.querySelectorAll("object"); // Find all <object> SVGs inside
    
        iconObjects.forEach(object => {
          object.onload = function () {
            const svgDoc = object.contentDocument;
            if (!svgDoc) return;
    
            const elements = svgDoc.querySelectorAll('path, rect'); // Change <path> & <rect>
    
            elements.forEach(el => {
              el.setAttribute('fill', startColor); // Set initial color
              el.style.transition = `fill ${duration}ms ease-in-out`;
    
              setTimeout(() => {
                el.setAttribute('fill', endColor); // Change color after animation + delay
              }, totalDelay);
            });
          };
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

changeSvgColorAfterAOS({
  selector: "#modalities",  // ID of the div that triggers the effect
  startColor: "black",
  endColor: "red",
  duration: 1000,  // Color change duration (ms)
  delay: 500       // Extra delay after AOS animation finishes (ms)
});

    

  });
  