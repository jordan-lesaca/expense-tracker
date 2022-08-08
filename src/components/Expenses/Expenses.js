import React, { useState } from 'react';
import ExpensesList from './ExpensesList'
import ExpenseFilter from './ExpenseFilter'
import Card from '../UI/Card'

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('')

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear
  })

  return (
    <Card>
      <div>
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler} 
        />
        <h1>Expense Page</h1>
        {console.log(props.items)}
        <ExpensesList items={filteredExpenses} />
      </div>
    </Card>
  );
};

export default Expenses;