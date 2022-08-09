import React, { useState } from 'react'
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'
import './App.css'

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Who runs the world - Noam Chomsky (Book)',
    amount: 12.99,
    date: new Date(2022, 7, 27),
  },
  { id: 'e2', 
  title: 'Samsung - 65" Smart Tizen TV', 
  amount: 1599.99, 
  date: new Date(2021, 12, 2) 
  },
  {
    id: 'e3',
    title: 'Macbook Pro 16 (2021)',
    amount: 3499.99,
    date: new Date(2021, 2, 29),
  },
  {
    id: 'e4',
    title: 'Jarvis Standing Desk',
    amount: 4569.99,
    date: new Date(2020, 5, 23),
  },
  {
    id: 'e5',
    title: 'Happy Lamp',
    amount: 39.99,
    date: new Date(2019, 1, 13),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    })
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} /> 
      <Expenses items={expenses} />
    </div>
  );
};

export default App;