import React from "react";
import closeTransaction from "../assets/closeTransaction.png";

function RecentTransactions({onClose}) {
  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm">
      <div className="bg-white p-6 rounded shadow-lg w-300 h-170">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">Transactions</h1>
          <img onClick={onClose} className="cursor-pointer w-7" src={closeTransaction} />
        </div>
        <div className="flex items-center justify-between mt-7 gap-5">
          <input
            className=" px-3 border rounded h-10 w-[100%]"
            type="text"
            placeholder="Search transaction by description, category..."
          />
          <div className="h-10 flex items-center justify-between gap-5">
            <input className="border rounded py-1.5 px-3" type="date" />
            <select className="border rounded py-1.5 px-3">
              <option value="">Type</option>
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
            <select className="border rounded py-1.5 px-3">
              <option value="">Category</option>
              <option value="investment">Interest / Investments</option>
              <option value="debt">Debt Payments</option>
              <option value="savings">Savings / Investments</option>
              <option value="gifts">Gifts & Donations</option>
              <option value="salary">Salary / Wages</option>
              <option value="rental">Rental Income</option>
              <option value="gifts">Gifts / Donations</option>
              <option value="bonus">Bonuses / Incentives</option>
              <option value="pension">Pension / Retirement</option>
              <option value="business">Business / Freelance</option>
              <option value="benefits">Government Benefits</option>
              <option value="housing">Housing / Rent</option>
              <option value="healthcare">Healthcare</option>
              <option value="shopping">Shopping</option>
              <option value="education">Education</option>
              <option value="transport">Transportation</option>
              <option value="entertainment">Entertainment & Leisure</option>
              <option value="personalcare">Personal Care</option>
              <option value="food">Food & Dining</option>
              <option value="bills">Bills & Utilities</option>
              <option value="insurance">Insurance</option>
            </select>
          </div>
        </div>
        <div className="w-[100%] mt-7 rounded h-125 border">
            <div className="flex items-center justify-between border-b-1 border-gray-300 h-10 rounded-t px-3 bg-gray-200">
                <h2>DATE</h2>
                <h2>DESCRIPTION</h2>
                <h2>CATEGORY</h2>
                <h2>AMOUNT</h2>
            </div>
            <div className="flex items-center justify-center h-120">No Transactions yet</div>
        </div>
      </div>
    </div>
  );
}

export default RecentTransactions;
