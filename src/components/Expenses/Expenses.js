import React, { useState } from 'react';
import ExpensesList from './ExpensesList'

const Expenses = (props) => {

  return (
    <div>
      <h1>Expense Page</h1>
      {console.log(props.items)}
      <ExpensesList items={props.items} />
    </div>
  );
};

export default Expenses;