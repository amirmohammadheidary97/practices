const inputElm = document.getElementById("myinput");
inputElm.addEventListener("input", (e) => {
  // console.log(e.currentTarget.value);
  // e.preventDefault();
  // inputElm.setAttribute("data-hello", e.currentTarget.value);
  // inputElm.setAttribute("data-goo", e.currentTarget.value);
  inputElm.classList.add(e.target.value);
});
// inputElm.addEventListener("change", (e) => {
// console.log(e.currentTarget.value);
// e.preventDefault();
// });
//////
const inputObserver = (mutataions) => {
  console.log(mutataions);
};
//////
let observer = new MutationObserver(inputObserver);
observer.observe(inputElm, {
  attributes: true,
  attributeOldValue: true,
  childList: true,
  // characterDataOldValue: true,
});
