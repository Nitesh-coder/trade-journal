
import { FaChartPie } from 'react-icons/fa'
import { FaImage } from 'react-icons/fa6'
import { SiWindows } from 'react-icons/si'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {
    const navigation = useNavigate()
  return (
    <div className=' sm:h-screen sm:w-max bg-bg-black flex sm:flex-col items-center w-full h-max '>
        <ul className=' sm:h-40 flex sm:flex-col justify-between w-full sm:mt-5'>
            <li onClick={()=>navigation('/')} className=' p-4 hover:bg-slate-800 transition-all duration-100'><SiWindows size={30} color='skyblue' /></li>
            <li onClick={()=>navigation('/stats')} className=' p-4 hover:bg-slate-800 transition-all duration-100'><FaChartPie size={30} color='#9C9C9C' /></li>
            <li onClick={()=>navigation('/gallery')} className=' p-4 hover:bg-slate-800 transition-all duration-100'><FaImage size={30} color='#9C9C9C' /></li>
        </ul>
    </div>
  )
}

export default Navbar