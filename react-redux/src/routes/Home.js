import React, { useState } from "react";
import { connect } from "react-redux";

function Home({toDos}) {
//   console.log("Home " + props);
  const [text, setText] = useState("");

  function onChange(e) {
    setText(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    setText("");
  }

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        { JSON.stringify(toDos) }
      </ul>
    </>
  );
}

// function getCurrentState(state, ownProps) {
    
// mapStateToProps; Redux state로 부터 home(component)에 prop으로써 전달한다
function mapStateToProps(state) {
    // // mapStateToProps() err; return plain object
    // // redux store에서 state를 받아오고 있음
    // console.log(state, ownProps);
    // // state = store로부터 가져온 state
    // // ownProps = Home에게 준 props b/c react-router
    return { toDos: state };
}

// ⭐connect(): comps에 store 연결
// connect(state, dispatch) 2개의 params
// getState(); curr state 전달
// dispatch(): store 혹은 reducer에 메세지 전달
export default connect(mapStateToProps) (Home);