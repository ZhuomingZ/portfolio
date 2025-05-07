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
    

   
  });
  