function AddIncome({onClose}) {
  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm">
      <div className="bg-white p-6 rounded shadow-lg">
        <div>
          <h2 className="text-xl font-bold">Add New Income</h2>
          <p className="text-gray-600">
            Enter the details of your income below.
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
            <option value="salary">Salary / Wages</option>
            <option value="business">Business / Freelance</option>
            <option value="investment">Interest / Investments</option>
            <option value="rental">Rental Income</option>
            <option value="gifts">Gifts / Donations</option>
            <option value="bonus">Bonuses / Incentives</option>
            <option value="pension">Pension / Retirement</option>
            <option value="benefits">Government Benefits</option>
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
          <button onClick={onClose} className="bg-blue-600 rounded text-white px-5 font-bold cursor-pointer py-2">
            Close
          </button>
          <button className="bg-green-500 rounded text-white px-5 font-bold cursor-pointer py-2">
            Add Income
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddIncome;
