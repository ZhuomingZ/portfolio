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
      const elements = svgDoc.querySelectorAll('path, rect'); // 选择所有<path>和<rect>

      elements.forEach(el => {
        el.setAttribute('fill', startColor); // 设置初始颜色
        el.style.transition = `fill ${duration}ms ease-in-out`;

        setTimeout(() => {
          el.setAttribute('fill', endColor); // 变更颜色
        }, 10);
      });
    }
        
    // Select all objects inside .icons div
    const iconObjects = document.querySelectorAll(".icons object");

    // Run animations in sequence
    iconObjects.forEach((object, index) => {
      const aosDuration = parseInt(object.getAttribute("data-aos-duration"), 10) || 1000; // Default 1000ms
      const delayAfterAOS = 500; // Adjust this if needed

      setTimeout(() => {
        scheduler.addAnimation(() => changeSVGColor(object, "red"), delayAfterAOS);
        if (index === iconObjects.length - 1) scheduler.run(); // Start scheduler on the last item
      }, aosDuration);
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
  