
const InputBox = () => {
    return (
      <div className="h-8 w-full bg-cyan-400 text-slate-800 rounded-b-md sm:text-md text-sm">
          <ul className=" flex justify-between items-center h-full px-1">
            
              <li className=" flex-1 text-start">
                <select name="" id="" className=" border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="W">W</option>
                    <option value="L">L</option>
                </select>
              </li>


              <li className=" flex-1 text-start">
                <select name="" id="" className=" sm:w-28 w-16 -ml-4 sm:-ml-0 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="XAUUSD">XAUUSD</option>
                    <option value="GBPJPY">GBPJPY</option>
                    <option value="NAS100">NAS100</option>
                    <option value="BTC">BTC</option>
                </select>
              </li>

              <li className=" flex-1 text-start">
                <select name="" id="" className=" sm:w-28 w-12 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="BUY">BUY</option>
                    <option value="SELL">SELL</option>
                </select>
              </li>

              <li className=" flex-1 text-start">
                <input className=" sm:w-28 w-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" type="number" />
              </li>

              <li className=" flex-1 text-start">
                <input className=" sm:w-28 w-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" type="number" />
              </li>


              <li className=" flex-1 text-start">+1.2%</li>
              <li className=" flex-1 text-start">
                <select className=" sm:w-28 w-12 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" name="" id="">
                    <option value="NY">NY</option>
                    <option value="LONDON">LONDON</option>
                    <option value="ASIAN">ASIAN</option>
                </select>
              </li>
              <li className=" hidden sm:block flex-1 text-start">123$</li>
              <li className=" hidden sm:block flex-1 text-start">Breakout</li>
          </ul>
      </div>
    )
  }
  
  export default InputBox