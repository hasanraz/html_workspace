import "../css/style.css";

let liEls = document.querySelectorAll("carousel_img carousel_img_list");
let index = 0;
window.show = function (increase) {
  index = index + increase;
  index = Math.min(Math.max(index, 0), liEls.length - 1);
  liEls[index].scrollIntoView({ behavior: "smooth" });
};
