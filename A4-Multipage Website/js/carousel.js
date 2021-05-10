

let liEls = document.getElementsByClassName("carousel_img_list");
let index = 0;
window.show = function (increase) {
  console.log("Inside the show");
  index = index + increase;
  index = Math.min(Math.max(index, 0), liEls.length - 1);
  liEls[index].scrollIntoView({ behavior: "smooth" });
};
