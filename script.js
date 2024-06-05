// --- Handling section WT image carousel ---
const imageWrapper = document.querySelector(".image-wrapper");
const imageItems = document.querySelectorAll(".image-wrapper > *");
const imageLength = imageItems.length;
const perView = 1;
let totalScroll = 0;
const delay = 2000;

imageWrapper.style.setProperty("--per-view", perView);
for (let i = 0; i < perView; i++) {
  imageWrapper.insertAdjacentHTML("beforeend", imageItems[i].outerHTML);
}

let autoScroll = setInterval(scrolling, delay);

function scrolling() {
  totalScroll++;
  if (totalScroll == imageLength + 1) {
    clearInterval(autoScroll);
    totalScroll = 1;
    imageWrapper.style.transition = "0s";
    imageWrapper.style.left = "0";
    autoScroll = setInterval(scrolling, delay);
  }
  const widthEl =
    document.querySelector(".image-wrapper > :first-child").offsetWidth + 40;
  imageWrapper.style.left = `-${totalScroll * widthEl}px`;
  imageWrapper.style.transition = ".3s";
}

// --- Handling section-ms tabs ---
const msHeadingEl = document.querySelectorAll(".ms-heading-container");
const msListEl = document.querySelectorAll(".ms-list");
const btn = document.querySelectorAll(".ms-btn");

for (let i = 0; i < msHeadingEl.length; i++) {
  msHeadingEl[i].addEventListener("click", function () {

    msListEl[i].classList.toggle("show-text");
   
    if (msListEl[i].classList.contains("show-text")) {
      msListEl[i].classList.remove("hide-text");
      btn[i].innerHTML = "-";
    } else {
     
      msListEl[i].classList.add("hide-text");
      btn[i].innerHTML = "+";
    }
  });
}

// --- Handling section-faq tabs ---

const faqHeadingEl = document.querySelectorAll(".faq-heading-container");
const faqTabEl = document.querySelectorAll(".tab");
const faqBtn = document.querySelectorAll(".faq-btn");

for (let i = 0; i < faqHeadingEl.length; i++) {
  faqHeadingEl[i].addEventListener("click", function () {

    faqTabEl[i].classList.toggle("show-text");
   
    if (faqTabEl[i].classList.contains("show-text")) {
      faqTabEl[i].classList.remove("hide-text");
      faqBtn[i].innerHTML = "-";
    } else {
     
      faqTabEl[i].classList.add("hide-text");
      faqBtn[i].innerHTML = "+";
    }
  });
}