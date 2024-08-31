
const RowData = () => {
  return (
    <div className="h-8 w-full bg-slate-400 text-slate-800 rounded-md sm:text-md text-sm my-1">
        <ul className=" flex justify-between items-center h-full px-1">
            <li className=" flex-1 text-start">W</li>
            <li className=" hidden sm:block flex-1 text-start">{ new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</li>
            <li className=" flex-1 text-start">XAUUSD</li>
            <li className=" flex-1 text-start">LONG</li>
            <li className=" flex-1 text-start">+45</li>
            <li className=" flex-1 text-start">0.3</li>
            <li className=" flex-1 text-start">New York</li>
            <li className=" flex-1 text-start">+1.2%</li>
            <li className=" hidden sm:block flex-1 text-start">123$</li>
            <li className=" hidden sm:block flex-1 text-start">Breakout</li>
        </ul>
    </div>
  )
}

export default RowData