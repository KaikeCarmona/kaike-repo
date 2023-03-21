import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from "../pages/Home/Home"
import Contact from "../pages/Contact/Contact"
import Projects from "../pages/Projects/Projects"
import Thanks from "../pages/Thanks/Thanks"
export default  function Rotas(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Projects" element={<Projects />} />
                <Route path="/Contact" element={< Contact />} />
                <Route path="/Contact/Thanks" element={< Thanks />} />
            </Routes>
        </Router>
    )
}