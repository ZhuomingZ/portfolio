document.addEventListener("DOMContentLoaded", function () {
   
    // 获取所有<object>元素
    const iconObjects = document.querySelectorAll('#modalities object');

  // 遍历每个<object>元素
  iconObjects.forEach(object => {
    // 等待SVG加载完成
  object.onload = function () {
    const svgDoc = object.contentDocument; // 获取SVG文档
    const paths = svgDoc.querySelectorAll('path'); // 获取所有<path>元素

    // 遍历所有<path>元素并修改颜色
    paths.forEach(path => {
      path.setAttribute('fill', 'red'); // 修改填充颜色
      path.setAttribute('stroke', 'blue'); // 修改描边颜色
    });
  };
});
  });
  