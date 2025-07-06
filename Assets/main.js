// assets/main.js
document.addEventListener('DOMContentLoaded', () => {
    const listBtn = document.getElementById('show-list-btn');
    const heatmapBtn = document.getElementById('show-heatmap-btn');
    const listView = document.getElementById('list-view');
    const heatmapView = document.getElementById('heatmap-view');

    // 榜单按钮点击事件
    listBtn.addEventListener('click', () => {
        listView.style.display = 'block';
        heatmapView.style.display = 'none';
        listBtn.classList.add('active');
        heatmapBtn.classList.remove('active');
    });

    // 热力图按钮点击事件
    heatmapBtn.addEventListener('click', () => {
        listView.style.display = 'none';
        heatmapView.style.display = 'block';
        listBtn.classList.remove('active');
        heatmapBtn.classList.add('active');
    });
});