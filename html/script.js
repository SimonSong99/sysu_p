window.onscroll = function () {
  showScrollButton();
};

function showScrollButton() {
  var button = document.getElementById("scrollToTopButton");
  if (
    document.body.scrollTop > 600 ||
    document.documentElement.scrollTop > 1000
  ) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function getCountOfElements() {
  var xhr = new XMLHttpRequest();
  var url = "articalreview.html";
  xhr.open("GET", url, true);
  xhr.send();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var response = xhr.responseText;
      var parser = new DOMParser();
      var doc = parser.parseFromString(response, "text/html");
      var elements = doc.getElementsByClassName("libt");
      var count = elements.length;
      document.getElementById("libtresult").textContent =
        "共有 " + count + " 个具有该类名的元素。";
    }
  };
}
