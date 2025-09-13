function AddExpense({ onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm">
      <div className="bg-white p-6 rounded shadow-lg">
        <div>
          <h2 className="text-xl font-bold">Add New Expense</h2>
          <p className="text-gray-600">
            Enter the details of your expense below.
          </p>
        </div>
        <div className="flex mt-10 gap-5">
          <div>
            <p>Amount</p>
            <input
              className="bg-gray-400 text-white rounded h-10 w-70 px-3"
              type="number"
            />
          </div>
          <div>
            <p>Date</p>
            <input
              className="bg-gray-400 text-white rounded h-10 w-70 px-3"
              type="date"
            />
          </div>
        </div>
        <div className="mt-7">
          <p>Category</p>
          <select className="block w-[100%] text-white bg-gray-400 rounded h-10 px-3">
            <option value="">Select Category</option>
            <option value="food">Food & Dining</option>
            <option value="bills">Bills & Utilities</option>
            <option value="transport">Transportation</option>
            <option value="housing">Housing / Rent</option>
            <option value="healthcare">Healthcare</option>
            <option value="shopping">Shopping</option>
            <option value="education">Education</option>
            <option value="entertainment">Entertainment & Leisure</option>
            <option value="personalcare">Personal Care</option>
            <option value="insurance">Insurance</option>
            <option value="debt">Debt Payments</option>
            <option value="savings">Savings / Investments</option>
            <option value="gifts">Gifts & Donations</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="mt-7">
          <p>Description</p>
          <textarea
            className="w-[100%] text-white bg-gray-400 rounded h-20 px-3"
            name="description"
            id="description"
            placeholder="e.g., Weekly grocery shopping"
          ></textarea>
        </div>
        <div className="mt-7 flex justify-around">
          <button
            onClick={onClose}
            className="bg-blue-600 rounded text-white px-5 font-bold cursor-pointer py-2"
          >
            Close
          </button>
          <button className="bg-red-500 rounded text-white px-5 font-bold cursor-pointer py-2">
            Add Expense
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddExpense;
