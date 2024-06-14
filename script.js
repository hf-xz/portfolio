/* 图片点击放大 */
// 获取所有图片
var imgs = document.querySelectorAll('img');
// 添加监听器
imgs.forEach((img) => {
    img.addEventListener('click', function () {
      // 判断是否有 zoomed 类
      var hasClass = this.classList.contains('zoomed');
      // 如果有就移除，没有就添加
      if (hasClass) {
        this.classList.remove('zoomed');
      } else {
        this.classList.add('zoomed');
      }
    });
})
