
const RowData = () => {
  return (
    <div className="h-12 w-full bg-gray-800 text-white sm:text-lg text-sm border-b border-gray-700 shadow-md">
      <ul className="flex justify-between items-center h-full px-4">
        <li className="flex-1 text-left font-semibold">W</li>
        <li className="hidden sm:block flex-1 text-left text-gray-400 sm:-ml-20">
          {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
        </li>
        <li className="flex-1 text-left -ml-4 sm:-ml-0">XAUUSD</li>
        <li className="flex-1 text-left ml-4 sm:ml-0 text-green-400">LONG</li>
        <li className="flex-1 text-left">0.3</li>
        <li className="flex-1 text-left text-green-400">+45</li>
        <li className="flex-1 text-left text-green-400">+1.2%</li>
        <li className="hidden sm:block flex-1 text-left">NY</li>
        <li className="hidden sm:block flex-1 text-left">$123</li>
        <li className="hidden sm:block flex-1 text-left">Breakout</li>
      </ul>
    </div>
  );
}

export default RowData;
