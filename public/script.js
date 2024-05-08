////////////////////////////////////
// Navbar

function uncheckedSideBarCheckBox(){

  const checkbox=document.querySelector(".sidebar-checkbox")
  checkbox.checked=false
  
}
////////////////////////////////////
// Features Section
const features = document.querySelectorAll(".feature");

features.forEach((feature) => {
  feature.addEventListener("click", handleClickFeature);
});

function handleClickFeature(e) {
  features.forEach((el) => el.classList.remove("active-feature"));
  e.target.closest("li").classList.add("active-feature");
  const featuresInfo = document.querySelectorAll(".feature-info");
  const featureInfo = Array.from(featuresInfo).find(
    (el) => el.dataset.index === e.target.closest("li").dataset.index
  );
  console.log(featureInfo)
  featuresInfo.forEach((el) => el.classList.add("hidden"));
  featureInfo.classList.remove("hidden");
}

////////////////////////////////////
// Testimonials Section

const testimonialSlideLeftArrow = document.querySelector(
  ".testimonials-slide-left-arrow"
);
const testimonialSlideRightArrow = document.querySelector(
  ".testimonials-slide-right-arrow"
);
const testimonialsList = document.querySelector(".testimonials-list");

testimonialSlideRightArrow.addEventListener("click", handleMoveSlideRight);
testimonialSlideLeftArrow.addEventListener("click", handleMoveSlideLeft);
const circles = document.querySelector(".circles").children;

let counter = 0;
const testimonialsListLength = testimonialsList.children.length;
function handleMoveSlideRight(e) {
  if (counter >= testimonialsListLength - 1) return;
  const translationValue = (counter + 1) * -100;
  testimonialsList.style = `
        transform: translateX( ${translationValue}%);
    `;

  counter++;
  activeCircle();
}

function handleMoveSlideLeft() {
  if (counter === 0) return;
  const translationValue = (counter - 1) * -100;
  testimonialsList.style = `
    transform: translateX( ${translationValue}%);
    `;

  counter--;
  activeCircle();
}

circles[counter].classList.add("active-testimonials-circle");

function activeCircle() {
  [...circles].forEach((el, i) =>
    i === counter
      ? el.classList.add("active-testimonials-circle")
      : el.classList.remove("active-testimonials-circle")
  );
}

////////////////////////////////////
// FAQ Section

const faqAccrodions = document.querySelectorAll(".faq-accrodion");

faqAccrodions.forEach((accrodion) => {
  accrodion
    .querySelector("summary")
    .addEventListener("click", handleClickSummary(accrodion));
});

function handleClickSummary(accrodion) {
  return () =>
    accrodion.querySelectorAll(".accrodion-icon").forEach((icon) => {
      [...icon.classList].includes("hidden")
        ? icon.classList.remove("hidden")
        : icon.classList.add("hidden");
    });
}
