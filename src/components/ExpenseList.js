import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpense from "../selectors/expenses";

const ExpenseList = props => {
  console.log(props.expense);
  return (
    <div>
      <h1>Expense List</h1>
      {props.expense.map(ex => (
        <ExpenseListItem key={ex.id} {...ex} />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    expense: selectExpense(state.expenses, state.filters)
  };
};

const ConnectExpenseList = connect(mapStateToProps)(ExpenseList);

//export default connect(mapStateToProps)(ExpenseList);

export default ConnectExpenseList;
