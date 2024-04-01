import { legacy_createStore } from 'redux';
const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

// action만 반환하는 함수
const addToDo = (text) => {
  return { type: ADD_TODO, text };
};

const deleteToDo = id => {
  return { type: DELETE_TODO, id };
}


// redux를 통해 작은 단위의 function으로 쪼개려는 시도
const reducer = (state = [], action) => {
  // console.log(action);
  switch(action.type) {
    case ADD_TODO:
      // 이 배열에는 과거의 state + 새로운 Todo를 갖고 있게 됨
      // ⭐ 새로운 state를 만들어 return 해야함!!! 절대 mutate X
      // ⭐ ...state = ES6 spread; 모든 state array의 contents
      //    = 모든 array 콘텐츠가 열림 = 즉,  array 대신에 content를 원한다는 의미
      return [{text: action.text, id: action.id}, ...state];
    case DELETE_TODO:
      return [];
    default:
      return state;
  }
};

const store = legacy_createStore(reducer);

store.subscribe(()=>console.log(store.getState()));

const dispatchDeleteToDo = e => {
  const id = e.target.parentNode.id;
  store.dispatch(deleteToDo(id));
  // store.dispatch({ type: DELETE_TODO, text })
}

const paintToDos = () => {
  const toDos = store.getState();
  ul.innerHTML = "";
  toDos.forEach(toDo => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "DEL";
    btn.type = "button";
    btn.addEventListener("click", dispatchDeleteToDo)
    li.id = toDo.id;
    li.innerText = toDo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  })
}

store.subscribe(paintToDos);

const dispatchAddToDo = text => {
  store.dispatch(addToDo(text));
}

// const createToDo = toDo => {
//   const li = document.createElement("li");
//   li.innerText = toDo;
//   ul.appendChild(li);
// }

const onSubmit = e => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  // createToDo(toDo);
  // store.dispatch({ type: ADD_TODO, text: toDo, id: Date.now() })  // add action에 좀 더 context를 제공해야함
  // 우리는 이제 새로운 todo랑 함께 array return
  // NEVER MUTATE STATE!
  dispatchAddToDo(toDo);
}

form.addEventListener("submit", onSubmit);