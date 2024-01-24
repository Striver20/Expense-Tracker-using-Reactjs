import React, { useState } from "react";
import Card from "./components/Card";
import "./App.css";

function App() {
  const [balance, setBalance] = useState(0);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [amount, setAmount] = useState(0);
  const [card, setCard] = useState([]);
  const [text, setText] = useState("");

  const handleTransaction = () => {
    let am = parseFloat(amount);

    if (isNaN(am)) {
      console.error("Invalid amount entered");
      return;
    }

    let newIncome = am > 0 ? income + am : income;
    let newExpense = am < 0 ? expense - am : expense;

    setIncome(String(newIncome));
    setExpense(String(newExpense));

    let newBalance = newIncome - newExpense;
    setBalance(String(newBalance));

    // Update the card state with the new transaction
    setCard([...card, { text, amount }]);

    // Clear the input fields
    setText("");
    setAmount(0);
  };

  return (
    <>
      <div className="main">
        <div className="card">
          <div className="head flex justify-center">
            <h1 className="text-2xl font-semibold">Expense Tracker</h1>
          </div>
          <div className="balance">
            <h1 className="font-medium m-1">Your balance</h1>
            <h1>{balance}</h1>
          </div>
          <div className="inex">
            <div className="income">
              <h1 className="font-medium">INCOME</h1>
              <p>{income}</p>
            </div>
            <div className="expense">
              <h1 className="font-medium">EXPENSE</h1>
              <p>{expense}</p>
            </div>
          </div>
          <div className="history w-full ">
            <h1>History</h1>
            <div className="flex flex-col w-full ">
              {card.map((transaction, index) => (
                <Card
                  key={index}
                  text={transaction.text}
                  amount={transaction.amount}
                />
              ))}
            </div>
            <hr />
          </div>
          <div className="add">
            <h1 className="text-xl font-bold m-2">Add new transaction</h1>
            <hr />
            <h1 className="font-bold m-1">Text</h1>
            <input
              placeholder="Enter Text..."
              className="input m-1 w-full"
              value={text}
              onChange={(e) => setText(e.target.value)}
            ></input>
            <h1 className="font-bold">Amount</h1>
            <p>negative - expense, positive - income</p>
            <input
              placeholder="Enter amount"
              className="input m-2 w-full"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            ></input>
            <button className="btn" onClick={handleTransaction}>
              Add Transaction
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
