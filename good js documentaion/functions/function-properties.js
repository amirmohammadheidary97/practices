// default properties
function sayhi() {}
console.log(sayhi.name);
console.log(sayhi.length); // lenght of arguments : 0

// custom props
function Modal() {
  return Modal.Container(Modal.Header() + Modal.Footer());
}
Modal.Container = function ModalContainer(children) {
  console.log(ModalContainer.name);
  return `<div class="modal">${children}</div>`;
};
Modal.Header = function () {
  return `<div class="modal-header"></div>`;
};
Modal.Footer = function () {
  return `<div class="modal-footer"></div>`;
};
console.log(Modal());
