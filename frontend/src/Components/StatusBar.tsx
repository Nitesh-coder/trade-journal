
const StatusBar = () => {
  return (
    <div className="h-12 w-full bg-slate-900 text-slate-400 rounded-md sm:text-lg text-sm">
        <ul className=" flex justify-between items-center h-full px-1">
            <li>Status</li>
            <li className=" hidden sm:block">Date</li>
            <li>Pair</li>
            <li>Side</li>
            <li>Total Pips</li>
            <li>Lot Size</li>
            <li>Session</li>
            <li>%Changes</li>
            <li className=" hidden sm:block">PNL</li>
            <li className=" hidden sm:block">SetUp</li>
        </ul>
    </div>
  )
}

export default StatusBar