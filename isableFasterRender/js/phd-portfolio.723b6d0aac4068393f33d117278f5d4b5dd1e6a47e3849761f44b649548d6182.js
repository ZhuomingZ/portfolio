document.addEventListener("DOMContentLoaded", function () {
   
    // 获取所有<object>元素
    class AnimationScheduler {
      constructor() {
        this.queue = [];
        this.isRunning = false;
      }
    
      addAnimation(callback, delay = 0) {
        this.queue.push({ callback, delay });
      }
    
      run() {
        if (this.isRunning) return;
        this.isRunning = true;
    
        const executeNext = () => {
          if (this.queue.length === 0) {
            this.isRunning = false;
            return;
          }
          const { callback, delay } = this.queue.shift();
          setTimeout(() => {
            callback();
            executeNext();
          }, delay);
        };
    
        executeNext();
      }
    }
    
    // Initialize the scheduler
    const scheduler = new AnimationScheduler();
    
    // Function to change SVG path colors
    function changeSVGColor(object, color) {
      if (!object.contentDocument) return;
      const svgDoc = object.contentDocument;
      const paths = svgDoc.querySelectorAll("path");
    
      paths.forEach(path => {
        path.setAttribute("fill", color);
      });
    }
    
    // Select all objects inside .icons div
    const iconObjects = document.querySelectorAll(".icons object");
    
    // Wait for AOS animation to complete, then change color
    iconObjects.forEach((object, index) => {
      object.addEventListener("animationend", function () {
        scheduler.addAnimation(() => changeSVGColor(object, "red"), 500); // Delay after AOS
        if (index === iconObjects.length - 1) scheduler.run(); // Start scheduler after the last element
      });
    });

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

   
  });
  