import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { editExpense, removeExpense } from "../actions/expenses";

const EditExpensePage = props => {
  return (
    <div>
      <ExpenseForm
        expense={props.expenses}
        onSubmit={expense => {
          //Dispatch the action to edit expense
          // Redirect to the dashboard
          props.dispatch(editExpense(props.expenses.id, expense));
          props.history.push("/");
          console.log("updated", expense);
        }}
      />
      <button
        className="w3-btn w3-round-large w3-border w3-border-red w3-small w3-red"
        onClick={event => {
          event.preventDefault();
          props.dispatch(removeExpense({ id: props.expenses.id }));
          props.history.push("/");
        }}
      >
        Remove
      </button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    expenses: state.expenses.find(
      expense => expense.id === props.match.params.id
    )
  };
};
export default connect(mapStateToProps)(EditExpensePage);
