
const RowData = () => {
  return (
    <div className="h-8 w-full bg-slate-200 text-slate-800 sm:text-lg text-sm border-b-2 border-slate-300">
        <ul className=" flex justify-between items-center h-full px-1">
            <li className=" flex-1 text-start">W</li>
            <li className=" hidden sm:block flex-1 text-start sm:-ml-20">{ new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</li>
            <li className=" flex-1 text-start -ml-4 sm:-ml-0 ">XAUUSD</li>
            <li className=" flex-1 text-start ml-4 sm:ml-0 ">LONG</li>
            <li className=" flex-1 text-start">+45</li>
            <li className=" flex-1 text-start">0.3</li>
            
            <li className=" flex-1 text-start">+1.2%</li>
            <li className=" flex-1 text-start">NY</li>
            <li className=" hidden sm:block flex-1 text-start">123$</li>
            <li className=" hidden sm:block flex-1 text-start">Breakout</li>
        </ul>
    </div>
  )
}

export default RowData