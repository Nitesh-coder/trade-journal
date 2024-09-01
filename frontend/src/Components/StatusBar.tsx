

const StatusBar = () => {
  return (
    <div className="h-12 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-t-lg shadow-lg sm:text-lg text-sm">
      <ul className="flex justify-between items-center h-full px-4">
        <li className="flex-1 text-left font-semibold">Status</li>
        <li className="hidden sm:block flex-1 text-left sm:-ml-12">Date</li>
        <li className="flex-1 text-left font-semibold">Pair</li>
        <li className="flex-1 text-left">Side</li>
        <li className="flex-1 text-left hidden sm:block">Lot Size</li>
        <li className="flex-1 text-left sm:hidden">Lots</li>
        <li className="flex-1 text-left hidden sm:block">Total Pips</li>
        <li className="flex-1 text-left sm:hidden">Pips</li>
        <li className="flex-1 text-left hidden sm:block">% Changes</li>
        <li className="flex-1 text-left sm:hidden">% Gain</li>
        <li className="flex-1 text-left hidden sm:block">Session</li>
        <li className="hidden sm:block flex-1 text-left">PNL</li>
        <li className="hidden sm:block flex-1 text-left">Setup</li>
      </ul>
    </div>
  );
}

export default StatusBar;
