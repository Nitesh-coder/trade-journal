import React, { useState } from "react"
import InputBox from "../Components/InputBox"
import Navbar from "../Components/Navbar"
import RowData from "../Components/RowData"
import StatusBar from "../Components/StatusBar"

const Home: React.FC = () => {
  interface Trade {
    pair: string;
    side: string;
    pips: number;
    lot: number;
    session: string;
  };
/*   const [data, setData] = useState<Trade[]>([
    { pair: 'xauused', side: 'long', pips: 15, lot: 0.3, session: 'NY' },
    { pair: 'eurusd', side: 'short', pips: 10, lot: 0.2, session: 'LDN' },
    { pair: 'usdjpy', side: 'long', pips: 20, lot: 0.5, session: 'TKY' },
  ]); */
  const data = [
    { pair: 'xauused', side: 'long', pips: 15, lot: 0.3, session: 'NY' },
    { pair: 'eurusd', side: 'short', pips: 10, lot: 0.2, session: 'LDN' },
    { pair: 'usdjpy', side: 'long', pips: 20, lot: 0.5, session: 'TKY' },
  ]
  return (
    <div className=" sm:flex">
        <Navbar homeCl='skyblue' galCl='#9C9C9C' statsCl='#9C9C9C' />
        <div className=" w-full">
          <div>Build Something Useful</div>
          <StatusBar />
          <div>
            {data.map((index)=>(
              <div key={index}>
                {<RowData />}
              </div>
            ))}
          </div>
          <InputBox />
        </div>
    </div>
  )
}

export default Home