import _ from "lodash";
import printMe from "./print";

function component() {
  const element = document.createElement("div");
  element.innerHTML = _.join(["سلام", "چطوری"], " ");

  const btn = document.createElement("button");
  btn.innerHTML = "click me";
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}
document.body.appendChild(component());
