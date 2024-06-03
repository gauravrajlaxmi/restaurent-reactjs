  import Restaurent from "./components/Basics/Restaurent";
 import React from 'react'
 import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
 import MenuCard from "./components/Basics/MenuCard";
import Navbar from "./components/Basics/Navbar"
import Menuapi from "./components/Basics/Menuapi"


 
 const App = () => {
   return (
    <>
      <div>
        <Restaurent/> 
       <Router>
        <Routes>
          <Route path="/" element={<Restaurent/>}/>
          <Route path="/navbar" element={<Navbar/>}/>
          <Route path="/menuCard" element={<MenuCard/>}/>
           <Route path="/menuapi/:id" element={<Menuapi/>}/>  

          
          </Routes>
       </Router>
     
     </div>
    </>
   
   )
 }
 
 export default App;
 