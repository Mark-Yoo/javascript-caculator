const $numInput = document.querySelector(".numInput");
const $sumBtn = document.querySelector(".sum");
const $subBtn = document.querySelector(".subtraction");
const $divBtn = document.querySelector(".division");
const $multiBtn = document.querySelector(".multiple");
const $initBtn = document.querySelector(".initialize");
const $equalBtn = document.querySelector(".equal");

let init = true;
let prevNumArr = [];
let prevFunc = "";
let totalNum = 0;

const saveHistory = (prevNum) => {
  prevNumArr.push(prevNum);
};
const ifInit = () => {
  totalNum += +$numInput.value;
  $numInput.value = "";
  init = false;
};
const changeFunc = (func) => {
  if (func === "+") {
    totalNum += +$numInput.value;
    $numInput.value = "";
  }
  if (func === "-") {
    totalNum -= +$numInput.value;
    $numInput.value = "";
  }
  if (func === "*") {
    totalNum *= +$numInput.value;
    $numInput.value = "";
  }
  if (func === "/") {
    totalNum /= +$numInput.value;
    $numInput.value = "";
  }
};
const saveNum = (e) => {
  console.log(e.code);
  if (isNaN(+e.target.value)) {
    $numInput.value = "";
  }
  if (e.code === "Equal") sumNum();
  if (e.code === "Minus") subNum();
  if (e.code === "keyX") multiNum();
  if (e.code === "Slash") return;
  if (e.code === "Enter") equalNum();
};
const sumNum = () => {
  prevFunc = "+";
  changeFunc(prevFunc);
};
const subNum = () => {
  prevFunc = "-";
  if (init) {
    ifInit();
  } else {
    changeFunc(prevFunc);
  }
};
const multiNum = () => {
  prevFunc = "*";
  if (init) {
    ifInit();
  } else {
    changeFunc(prevFunc);
  }
};
const divNum = () => {
  prevFunc = "/";
  if (init) {
    ifInit();
  } else {
    changeFunc(prevFunc);
  }
};
const equalNum = () => {
  if (prevFunc === "+") {
    changeFunc(prevFunc);
    $numInput.value = totalNum;
  }
  if (prevFunc === "-") {
    changeFunc(prevFunc);
    $numInput.value = totalNum;
  }
  if (prevFunc === "*") {
    changeFunc(prevFunc);
    $numInput.value = totalNum;
  }
  if (prevFunc === "/") {
    changeFunc(prevFunc);
    $numInput.value = totalNum;
  }
};
const initState = () => {
  let prevNumArr = [];
  init = true;
  totalNum = 0;
  $numInput.value = "";
};

$numInput.addEventListener("keyup", saveNum);
$sumBtn.addEventListener("click", sumNum);
$subBtn.addEventListener("click", subNum);
$equalBtn.addEventListener("click", equalNum);
$initBtn.addEventListener("click", initState);
