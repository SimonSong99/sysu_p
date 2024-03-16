const headerBg = document.getElementById("header-bg");
const bgImages = [
  "images/header/image1.jpg",
  "images/header/image2.jpg",
  "images/header/image3.jpg",
  "images/header/image4.jpg",
  // 添加更多背景图片链接
];

// 获取今天的日期作为随机种子
const date = new Date();
const seed = date.getDate();

// 根据日期随机选择背景图片
const randomIndex = seed % bgImages.length;
headerBg.style.backgroundImage = `url(${bgImages[randomIndex]})`;
headerBg.classList.add("header-bg-style");
