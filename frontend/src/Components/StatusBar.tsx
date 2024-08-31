
const StatusBar = () => {
  return (
    <div className="h-12 w-full bg-slate-900 text-slate-400 rounded-md sm:text-lg text-sm">
        <ul className=" flex justify-between items-center h-full px-1">
            <li className=" flex-1 text-start">Status</li>
            <li className=" hidden sm:block flex-1 text-start">Date</li>
            <li className=" flex-1 text-start">Pair</li>
            <li className=" flex-1 text-start">Side</li>
            <li className=" flex-1 text-start">Total Pips</li>
            <li className=" flex-1 text-start">Lot Size</li>
            <li className=" flex-1 text-start">Session</li>
            <li className=" flex-1 text-start">%Changes</li>
            <li className=" hidden sm:block flex-1 text-start">PNL</li>
            <li className=" hidden sm:block flex-1 text-start">SetUp</li>
        </ul>
    </div>
  )
}

export default StatusBar