import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

const initialState = {
  userData: {},
};

// dispatch({type:'add' , payload:"fghj"})

// dispatch( fetchData())

function userReducer(state = initialState, action) {
  switch (action.type) {
    case "add":
      return { ...state, userData: action.payload };
  }
}

const store = createStore(userReducer, applyMiddleware(thunk));

export default store;
