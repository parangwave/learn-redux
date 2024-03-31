// Vanilla Redux
const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.getElementById("number");

let count = 0;

number.innerText = count;

const updateCount = () => {
  number.innerText = count;
}


const handleAdd = () => {
  // console.log("add");
  count += 1;
  updateCount();
}

const handleMinus = () => {
  // console.log("minus");
  count -= 1;
  updateCount();
}

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);