window.addEventListener('DOMContentLoaded', () => {
  fetch('/search.xml')
    .then(response => response.text())
    .then(data => {
      // 解析XML并实现搜索功能
    });
});