import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState("2022");

  const addFilteredYear = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(`Year selected: ${selectedYear}`);
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  })



  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onShowYearHandler={addFilteredYear} selected={filteredYear} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>

  );
};

export default Expenses;
