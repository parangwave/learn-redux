// Vanilla Redux

import { legacy_createStore } from "redux" // npm install redux
// store = 나의 state(data)를 넣는 곳
// legacy_createStore으로 써야 취소선이 나타나지 않음

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.getElementById("number");

// 나의 data를 modify(수정)하는 function
// reducer가 return하는 것 = application에 있는 data
// 1. reducer/modifier는 나의 data를 바꿔준다. = application에 있는 data
// 만약에 여기에 state가 없으면, 0으로 초기화
const countModifier = (count = 0) => {
  return count;
};

const countStore = legacy_createStore(countModifier);
// createStore()는 reducer() 함수를 요구

console.log(countModifier);
console.log(countStore);
// 4개의 함수가 있음
console.log(countStore.getState());