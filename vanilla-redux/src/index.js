import { legacy_createStore } from 'redux';
const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const reducer = (state = [], action) => {
  console.log(action);
  switch(action.type) {
    case ADD_TODO:
      return [];
    case DELETE_TODO:
      return [];
    default:
      return state;
  }
};

const store = legacy_createStore();


// const createToDo = toDo => {
//   const li = document.createElement("li");
//   li.innerText = toDo;
//   ul.appendChild(li);
// }

const onSubmit = e => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  createToDo(toDo);
  store.dispatch({ type: ADD_TODO, text: toDo })  // add action에 좀 더 context를 제공해야함
  // 우리는 이제 새로운 todo랑 함께 array return
  // NEVER MUTATE STATE!
}

form.addEventListener("submit", onSubmit);