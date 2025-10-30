
document.addEventListener('DOMContentLoaded', function() {

    // 获取到按钮元素
    const contactButton = document.getElementById('contact-btn');

    // 事件监听器
    contactButton.addEventListener('click', function() {
        // 弹出一个提示框
        alert('我的邮箱是: 2833725906@qq.com');
    });

});




document.addEventListener('DOMContentLoaded', function() {
    


    const canvas = document.getElementById('nankai-canvas');
    
    if (canvas) {
        const ctx = canvas.getContext('2d');
        
        
        const text1 = "NANKAI";
        const text2 = "CS";
        
        // 颜色
        const nkPurple = '#4A0D87'; // 紫
        const csBlue = '#0071e3';   // 蓝 

        // 字体
        const fontSize = 80; // 字体大小
        const fontFamily = 'Arial, sans-serif'; 
        // 清理画布
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        
        // 设置字体
        ctx.font = `bold ${fontSize}px ${fontFamily}`;
        
        // 居中
        ctx.textBaseline = 'middle'; 

        
        // 测量第一部分 "NANKAI" 的宽度
        const text1Width = ctx.measureText(text1).width;
        
        // 测量第二部分 "CS" 的宽度
        const text2Width = ctx.measureText(text2).width;
        
        // 计算总宽度
        const totalWidth = text1Width + text2Width;
        
        // 计算起始 X 坐标，让整个 "NANKAICS" 水平居中
        const startX = (canvas.width - totalWidth) / 2;
        
        // 计算 Y 坐标 (画布的垂直中心)
        const y = canvas.height / 2;

       
        
        
        ctx.fillStyle = nkPurple;
        ctx.fillText(text1, startX, y);
        
        
        ctx.fillStyle = csBlue;
        ctx.fillText(text2, startX + text1Width, y);
    }
});