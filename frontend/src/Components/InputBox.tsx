

const InputBox = () => {
  return (
    <div className="h-10 w-full bg-blue-600 text-white rounded-b-md shadow-lg sm:text-md text-sm">
      <ul className="flex justify-between items-center h-full px-2 space-x-2">
        {/* Result Selector */}
        <li className="flex-1">
          <select 
            name="result" 
            id="result" 
            className="w-full border border-gray-300 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-700 p-1"
          >
            <option value="W">W</option>
            <option value="L">L</option>
          </select>
        </li>

        {/* Pair Selector */}
        <li className="flex-1">
          <select 
            name="pair" 
            id="pair" 
            className="w-full border border-gray-300 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-700 p-1"
          >
            <option value="XAUUSD">XAUUSD</option>
            <option value="GBPJPY">GBPJPY</option>
            <option value="NAS100">NAS100</option>
            <option value="BTC">BTC</option>
          </select>
        </li>

        {/* Action Selector */}
        <li className="flex-1">
          <select 
            name="action" 
            id="action" 
            className="w-full border border-gray-300 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-700 p-1"
          >
            <option value="BUY">BUY</option>
            <option value="SELL">SELL</option>
          </select>
        </li>

        {/* Input Fields */}
        <li className="flex-1">
          <input 
            className="w-full border border-gray-300 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-700 p-1"
            type="number" 
            placeholder="Lots" 
          />
        </li>

        <li className="flex-1">
          <input 
            className="w-full border border-gray-300 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-700 p-1"
            type="number" 
            placeholder="Pips" 
          />
        </li>

        {/* Session Selector */}
        <li className="hidden sm:flex flex-1">
          <select 
            className="w-full border border-gray-300 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-700 p-1"
            name="session" 
            id="session"
          >
            <option value="NY">NY</option>
            <option value="LONDON">LONDON</option>
            <option value="ASIAN">ASIAN</option>
          </select>
        </li>

        {/* Additional Information */}
        <li className="hidden sm:block flex-1 text-start"></li>
        <li className="hidden sm:block flex-1 text-start"></li>

        {/* Done Button */}
        <li>
          <button 
            className="bg-blue-800 hover:bg-blue-700 text-white font-semibold py-1 px-4 rounded-md transition duration-200"
          >
            Done
          </button>
        </li>
      </ul>
    </div>
  );
};

export default InputBox;
