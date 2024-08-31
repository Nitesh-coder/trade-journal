import InputBox from "../Components/InputBox"
import Navbar from "../Components/Navbar"
import RowData from "../Components/RowData"
import StatusBar from "../Components/StatusBar"

const Home = () => {
  return (
    <div className=" sm:flex">
        <Navbar homeCl='skyblue' galCl='#9C9C9C' statsCl='#9C9C9C' />
        <div className=" w-full">
          <div>Build Something Useful</div>
          <StatusBar />
          <RowData />
          <InputBox />
        </div>
    </div>
  )
}

export default Home