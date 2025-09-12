import { useState } from 'react';
import arrowRight from '../../assets/arrowRight.png'
import editBudget from '../../assets/editBudget.png'
import AddIncome from '../addIncome/addIncome';

function Home() {
  
  const [showIncome, setShowIncome] = useState(false)

  return (
    <div className="flex flex-col px-40">
      <div className="flex justify-between items-center py-7">
        <div className="py-3 flex flex-col gap-0.5">
          <h2 className="text-2xl font-semibold">Description</h2>
          <p className="text-gray-600 text-[1 rem]">
            Track your expenses and manage your finances effectively.
          </p>
        </div>
        <div className="flex gap-5">
          <button onClick={()=> setShowIncome(true)} className="bg-green-400 text-white rounded-full px-3.5 py-1.5 font-semibold cursor-pointer">
            Add Income
          </button>
          {showIncome && <AddIncome onClose={()=>setShowIncome(false)}/>}
          <button className="bg-red-400 text-white rounded-full px-3.5 py-1.5 font-semibold cursor-pointer">
            Add Expense
          </button>
        </div>
      </div>
      <div className="flex justify-between gap-5">
        <div className="border p-5 rounded-2xl bg-white w-100 border-gray-300">
          <h3 className="text-gray-600">Savings</h3>
          <p className="font-bold text-3xl">3,000</p>
        </div>
        <div className="border p-5 rounded-2xl bg-white w-100 border-gray-300">
          <h3 className="text-gray-600">Income</h3>
          <p className="font-bold text-3xl">3,000</p>
        </div>
        <div className="border p-5 rounded-2xl bg-white w-100 border-gray-300">
          <h3 className="text-gray-600">Expense</h3>
          <p className="font-bold text-3xl">3,000</p>
        </div>
      </div>

      <div className="w-[100%] border border-gray-300 rounded-2xl mt-10 p-5 bg-white">
        <div className='flex justify-between'>
            <h2 className="font-bold">Monthly Budget</h2>
            <img className='h-6 cursor-pointer' src={editBudget}/>
        </div>

        <div className="flex justify-between mt-3">
            <p>1,500 spent</p>
            <p className="text-gray-400">2,000</p>
        </div>

        <div className="border mt-3 border-gray-300 rounded-full h-3 bg-gray-300"></div>

        <div className="flex justify-end">
            <p className="text-gray-400">75% of budget used</p>
        </div>
      </div>

      <div className="my-10">
        <button className="flex border border-gray-300 rounded-2xl w-[100%] justify-center py-3 cursor-pointer gap-2 bg-white">See Recent Transactions <img src={arrowRight}/></button>
      </div>
    </div>
  );
}

export default Home;
