import { createStore } from "redux";

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy
});

const resetCount = () => ({
  type: "RESET"
});

//Reducers
//1. Reducers are pure functions: (the output of the fun is only determined by input is called pure function)
//2.Never change state or action

const countReducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      console.log("incre");
      return {
        counter: state.counter + action.incrementBy
      };
    case "DECREMENT":
      console.log("decre");
      return {
        counter: state.counter - action.decrementBy
      };

    case "RESET":
      console.log("reset");
      return {
        counter: 0
      };
    default:
      return state;
  }
};

let store = createStore(countReducer);

console.log(store.getState());
store.dispatch(incrementCount({ incrementBy: 5 }));

console.log(store.getState());
store.dispatch(decrementCount({ decrementBy: 1 }));

console.log(store.getState());
store.dispatch(resetCount());

console.log(store.getState());
