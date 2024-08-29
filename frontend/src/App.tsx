import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Stats from "./pages/Stats"
import Gallery from "./pages/Gallery"

function App() {
  
  return (
    <>
      <Router>

        <Routes>
          <Route path="/">
          <Route index element={<Home />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/gallery" element={<Gallery />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
