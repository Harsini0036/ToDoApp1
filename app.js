const container = document.querySelector(".carousel-container");
const btns = document.querySelectorAll(".btn");
const imgList = ["#005B41", "#2E4374", "#79155B", "#900C3F"];
let index = 0; //img array index
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    //console.log("clicked");
    if (btn.classList.contains("btn-left")) {
      //console.log("clicked left");

      index--;
      if (index < 0) {
        index = imgList.length - 1;
      }
      container.style.backgroundColor = `${imgList[index]}`;
    } else {
      //console.log("clicked right");
      index++;
      if (index === imgList.length) {
        index = 0;
      }
      container.style.backgroundColor = `${imgList[index]}`;
    }
  });
});
