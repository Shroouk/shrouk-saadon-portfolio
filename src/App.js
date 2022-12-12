import React, { Component } from 'react';
import { BrowserRouter, Navigate, Route , Routes,Link} from 'react-router-dom';

import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Home from './Components/Home/Home';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Experiences from './Components/Experiences/Experiences';
import Feedback from './Components/Feedback/Feedback';





class App extends Component {

 

  render(){
    

   // console.log("render");
   return (


    <BrowserRouter>
     <div className="App">
     <Sidebar/>
          <div className='container '>
          <div className='container context'>
          <Routes>
         {/* <Route exact path='/' component={Home}/> */}
        
         <Route path="/skills" element={<Skills/>} />
         <Route path="/projects" element={<Projects/>} />
         <Route path="/experiences" element={<Experiences/>} />
         <Route path="/feedback" element={<Feedback/>} />
         <Route exact path='/'  element={<Home />} />
         
         </Routes>
          </div>

          
          <div className="area" >
                        <ul className="circles">
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                        </ul>
                </div>  
          
         
          </div>
         
         
    

     </div>
 </BrowserRouter>
);
  }
}

export default App;
