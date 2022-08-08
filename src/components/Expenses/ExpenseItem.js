import React from 'react'; 
import Card from '../UI/Card';

const ExpenseItem = (props) => {
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();

  return (
    <li>
    <Card>
    <div>
      <div>{month}</div>
      <div>{year}</div>
      <div>{day}</div>
    </div>

      <div>
        <h2>{props.title}</h2>
        <div>${props.amount}</div>
      </div>
      
    </Card>
    </li>
  );
}

export default ExpenseItem;