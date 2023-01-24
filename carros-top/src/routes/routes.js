import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Navbar from '../components/Navbar/Navbar'
import Home from '../pages/Home/Home'
import Catalogo from '../pages/Catalago/Catalago'


function RoutesApp(){

    return(
        <BrowserRouter>

        <Navbar/>

        
        <Routes>        
            
            <Route path="/" element={<Home/>}/>            
            <Route path="/catalogo" element={<Catalogo/>}/> 


        </Routes>
        
        
        </BrowserRouter>
    )
}

export default RoutesApp