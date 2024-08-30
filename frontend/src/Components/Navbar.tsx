
import React from 'react'
import { FaChartPie } from 'react-icons/fa'
import { FaImage } from 'react-icons/fa6'
import { SiWindows } from 'react-icons/si'
import { useNavigate } from 'react-router-dom'

interface onClickBGProp{
  homeCl: string,
  statsCl: string,
  galCl: string
}

const Navbar: React.FC<onClickBGProp> = ({homeCl,statsCl,galCl}) => {
    const navigation = useNavigate()
    const getIconSize = () => {
      if (window.innerWidth < 640) return 15; // Small screens
      if (window.innerWidth < 1024) return 20; // Medium screens
      return 25; // Large screens
    };
    const iconSize = getIconSize();
  return (
    <div className=' sm:h-screen sm:w-max bg-bg-black flex sm:flex-col items-center mr-1 w-full h-max '>
        <ul className=' sm:h-40 flex sm:flex-col justify-between w-full sm:mt-5'>
            <li onClick={()=>navigation('/')} className=' p-4 w-full flex justify-center hover:bg-slate-800 transition-all duration-100'><SiWindows size={iconSize} color={homeCl} /></li>
            <li onClick={()=>navigation('/stats')} className=' p-4 w-full flex justify-center hover:bg-slate-800 transition-all duration-100'><FaChartPie size={iconSize} color={statsCl} /></li>
            <li onClick={()=>navigation('/gallery')} className=' p-4 w-full flex justify-center hover:bg-slate-800 transition-all duration-100'><FaImage size={iconSize} color={galCl} /></li>
        </ul>
    </div>
  )
}

export default Navbar