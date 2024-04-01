import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
// 변화가 일어나면 application을 변화한 부분과 함께 다시 render하고 싶음
// react는 모든 것을 다시 render 해주지 않음
// react-redux가 필요한 이유: store의 변동사항에 대해 subscribe하고 싶음
// + store 변화하면 application의 모든 것이 re-render되면 좋겠음
import { Provider } from "react-redux";
import store from "./store";

// ReactDOM.render(<App></App>, document.getElementById("root"));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
