import { createStore, combineReducers } from "redux";
import uuid from "uuid";

store.subscribe(() => {
  const state = store.getState();
  const visibleExpense = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpense);
});

const expenseOne = store.dispatch(
  addExpense({
    description: "Rent",
    note: "Last rent",
    amount: 100,
    createdAt: -21000
  })
);

const expenseTwo = store.dispatch(
  addExpense({
    description: "Coffee",
    note: "Starbucks",
    amount: 300,
    createdAt: -1000
  })
);

// store.dispatch(
//   editExpense(expenseTwo.expense.id, { amount: 500, note: "Coffee Cafe Day" })
// );
// store.dispatch(removeExpense({ id: expenseOne.expense.id }));

//store.dispatch(setTextFilter({ text: "" }));

//store.dispatch(sortByDate());
store.dispatch(sortByAmount());

store.dispatch(setStartDate(0)); //StatDate :120
//store.dispatch(setStartDate()); //StartDate: undefined
store.dispatch(setEndDate(999)); //EndDate: 1200

const demoState = {
  expenses: [
    {
      id: "psdsooso",
      description: "Feb Rent",
      note: "This was the final payment for this address",
      amount: 12000,
      createdAt: 0
    }
  ],
  filters: {
    text: "rent",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined
  }
};
