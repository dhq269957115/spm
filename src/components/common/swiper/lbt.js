import animate from "./animate.js";
function lbt() {
  window.addEventListener("load", () => {
    let homeSwiper = document.getElementById("swiper");
    let arrowl = document.getElementById("arrow-l");
    let arrowr = document.getElementById("arrow-r");
    let ol = document.getElementById("circle");
    let homeSwiperWidth = 320;
    let num = 0;
    let circle = 0;
    let flag = true;
    homeSwiper.addEventListener("mouseover", () => {
      arrowl.style.display = "block";
      arrowr.style.display = "block";
      clearInterval(timer);
      timer = null;
    });
    homeSwiper.addEventListener("mouseout", () => {
      arrowl.style.display = "none";
      arrowr.style.display = "none";
      timer = setInterval(() => {
        arrowr.click();
      }, 2000);
    });
    let ul = homeSwiper.querySelector("ul");
    for (let i = 0; i < ul.children.length; i++) {
      let li = document.createElement("li");
      li.setAttribute("index", i);
      ol.appendChild(li);
      li.addEventListener("click", function() {
        if (flag) {
          flag = false;
          for (let i = 0; i < ol.children.length; i++) {
            ol.children[i].className = "";
          }
          this.className = "current";
          let index = this.getAttribute("index");
          num = index;
          circle = index;
          animate(ul, -index * homeSwiperWidth, () => {
            flag = true;
          });
        }
      });
    }
    ol.children[0].className = "current";
    arrowr.addEventListener("click", function() {
      if (num == ul.children.length - 1) {
        ul.style.left = 0;
        num = 0;
      }
      num++;
      animate(ul, -num * homeSwiperWidth, () => {
        flag = true;
      });
      circle++;
      if (circle == ol.children.length) {
        circle = 0;
      }
      circleChange();
    });
    arrowl.addEventListener("click", function() {
      if (num == 0) {
        num = ul.children.length - 1;
        ul.style.left = -num * homeSwiperWidth + "px";
      }
      num--;
      animate(ul, -num * homeSwiperWidth, () => {
        flag = true;
      });
      circle--;
      if (circle < 0) {
        circle = ol.children.length - 1;
      }
      circleChange();
    });
    function circleChange() {
      for (let i = 0; i < ol.children.length; i++) {
        ol.children[i].className = "";
      }
      ol.children[circle].className = "current";
    }
    let first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    let timer = setInterval(() => {
      arrowr.click();
    }, 2000);
  });
}
export { lbt };
