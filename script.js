// 等待整个 HTML 文档加载完成后再执行代码
document.addEventListener('DOMContentLoaded', function() {

    // 1. 通过 ID 获取到按钮元素
    const contactButton = document.getElementById('contact-btn');

    // 2. 为按钮添加一个点击事件监听器
    contactButton.addEventListener('click', function() {
        // 3. 当按钮被点击时，弹出一个提示框
        alert('我的邮箱是: 2833725906@qqcom');
    });

});