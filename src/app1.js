import "./app1.css";
import $ from "jquery";

const $btn1 = $("#add1");
const $btn2 = $("#minus1");
const $btn3 = $("#multi2");
const $btn4 = $("#divide2");
const $num = $("#number");

let n = localStorage.getItem("n");
$num.text(n || 100);

$btn1.on("click", () => {
  let n = Number($num.text());
  n += 1;
  localStorage.setItem("n", n);
  $num.text(n);
});
$btn2.on("click", () => {
  let n = Number($num.text());
  n -= 1;
  localStorage.setItem("n", n);
  $num.text(n);
});

$btn3.on("click", () => {
  let n = Number($num.text());
  n *= 2;
  localStorage.setItem("n", n);
  $num.text(n);
});
$btn4.on("click", () => {
  let n = Number($num.text());
  n /= 2;
  localStorage.setItem("n", n);
  $num.text(n);
});
