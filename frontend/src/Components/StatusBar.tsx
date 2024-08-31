
const StatusBar = () => {
  return (
    <div className="h-10 w-full bg-slate-900 text-slate-400 rounded-t-md sm:text-lg text-sm">
        <ul className=" flex justify-between items-center h-full px-1">
            <li className=" flex-1 text-start">Status</li>
            <li className=" hidden sm:block flex-1 text-start sm:-ml-20">Date</li>
            <li className=" flex-1 text-start">Pair</li>
            <li className=" flex-1 text-start">Side</li>
            <li className=" flex-1 text-start hidden sm:block">Total Pips</li>
            <li className=" flex-1 text-start sm:hidden">Pips</li>
            <li className=" flex-1 text-start hidden sm:block">Lot Size</li>
            <li className=" flex-1 text-start sm:hidden">Lots</li>
            
            <li className=" flex-1 text-start hidden sm:block">%Changes</li>
            <li className=" flex-1 text-start sm:hidden">%</li>
            <li className=" flex-1 text-start ">Session</li>
            <li className=" hidden sm:block flex-1 text-start">PNL</li>
            <li className=" hidden sm:block flex-1 text-start">SetUp</li>
        </ul>
    </div>
  )
}

export default StatusBar