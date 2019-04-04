import React from "react";
import { Link } from "react-router-dom";

const ExpenseListItem = ({ description, amount, createdAt, id, dispatch }) => {
  return (
    <div>
      <div>
        <Link to={`/edit/${id}`}>
          <h4>{description}</h4>
        </Link>
        <p>
          {amount} - {createdAt}
        </p>
      </div>
      <br />
    </div>
  );
};

export default ExpenseListItem;
