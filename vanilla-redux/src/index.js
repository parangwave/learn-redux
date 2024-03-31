// Vanilla Redux

import { legacy_createStore } from "redux" // npm install redux
// store = 나의 state(data)를 넣는 곳
// legacy_createStore으로 써야 취소선이 나타나지 않음

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.getElementById("number");

// reducer = 나의 data를 modify(수정)하는 function
// reducer가 return하는 것 = application에 있는 data

// 1. reducer/modifier는 나의 data를 바꿔준다. = application에 있는 data
// 만약에 여기에 state가 없으면, 0으로 초기화

// 2. state를 어떻게 modify? action으로 수정하자
// action은 plain한 obj여야함
// reducer 외부에서 reducer와 소통할 수 있어야 함 -> action 보내기
const countModifier = (count = 0, action) => {
  console.log(count, action);
  if (action.type === "ADD") {
    // console.log("add one");
    return count + 1;
  } else if (action.type === "MINUS") {
    return count - 1;
  } else {
    return count;
  }
};

const countStore = legacy_createStore(countModifier);
// createStore()는 reducer() 함수를 요구

console.log(countModifier);
console.log(countStore);
// 4개의 함수가 있음
console.log(countStore.getState());

// dispatch()을 통해 action(메세지)을 보낼 수 있음
countStore.dispatch({type: "ADD"});
countStore.dispatch({type: "ADD"});
countStore.dispatch({type: "ADD"});
countStore.dispatch({type: "ADD"});
countStore.dispatch({type: "ADD"});
countStore.dispatch({type: "MINUS"});
countStore.dispatch({type: "MINUS"});

console.log(countStore.getState());
// create data's store -> set data's modifier 
// -> send message to the store -> set message in action and check it