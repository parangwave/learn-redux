import { legacy_createStore } from 'redux';

const ADD = "ADD";
const DEL = "DEL";

const addToDo = (text) => {
    return {
        type:ADD,
        text
    }
}

const delToDo = (id) => {
    return {
        type:DEL,
        id
    }
}

const reducer = (state = [], action) => {
    switch(action.type) {
        case ADD:
            return [{text: action.text, id: Date.now()}, ...state];
        case DEL:
            return state.filter(toDo => toDo !== action.id);
        default:
            return state;
    }
}

const store = legacy_createStore(reducer);

store.subscribe();

export default store;