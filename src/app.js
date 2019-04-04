import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import "normalize.css";
import "./styles/styles.scss";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpense from "./selectors/expenses";

const store = configureStore();
store.dispatch(
  addExpense({
    description: "Water Bill",
    amount: 1000,
    createdAt: "12-03-2018"
  })
);

store.dispatch(
  addExpense({
    description: "Gas Bill",
    amount: 4000,
    createdAt: "11-04-2019"
  })
);
store.dispatch(
  addExpense({
    description: "Rent",
    amount: 14000
  })
);

const state = store.getState();
const visibleExpenses = getVisibleExpense(state.expenses, state.filters);
console.log(visibleExpenses);

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById("app")
);
