import React, { Component } from 'react';


import './Experiences.css'

class Experiences extends Component {
  
        
 
 
    render(){
      
        return(
            <>        
                <div className='container '> 
                   
                    <div className='row txt-bg'>
                    <div>
                    <section id="stack" className="stack">
                        <h2 className="section-title mt-5 mb-5">Experiences</h2>
                        <div className="stack-container skill-sec experiences-sec">
                


                        <ul className="experiences">

                            <li className="dot">
                            
                            <h3 className="what dot">Javascript Developer</h3>
                           
                            <div className='when-where'>
                            <span className=" where">ElMoasserBooks </span>
                           
                                <span className=" when">  January 2022 - Present</span>
                            </div>
                            <p className="description  ">Developing educational games for students by using (javascript, CreateJs, Adobe Animate)</p>
                    
                            </li>


                            <li className="dot">
                            
                            <h3 className="what dot">Front End Freelance Developer
                            <img className='job-img' alt='shrouk-job-success-img' src='./assests/Capture.png'/>
                            </h3>
                           
                            <div className='when-where'>
                            <span className=" where">Upwork </span>
                           
                                <span className=" when">  January 2021 - Present</span>
                            </div>
                            <p className="description  ">Designing and developing websites by using (HTML,CSS,Javascript, ReactJs, ...)</p>
                    
                            </li>


                            <li className="dot">
                            
                            <h3 className="what dot">Trainee</h3>
                           
                            <div className='when-where'>
                            <span className=" where">National Telecommunication Institute (NTI) </span>
                           
                                <span className=" when">  August 2019 – September 2019</span>
                            </div>
                            <p className="description  ">Software summer internship</p>
                    
                            </li>

                            {/* <li className="dot">
                            <div className="where"><h3 className=" dot">Senior Online Editor</h3></div>
                            
                            <div className="when">2012 - Present</div>

                            <p className="description">Jelly-o pie chocolate cake...</p>
                            </li>
                            <li className="dot">
                            <div className="where">New York Times</div>
                            <h3 className="what dot">Senior Online Editor</h3>
                            <div className="when">2012 - Present</div>

                            <p className="description">Jelly-o pie chocolate cake...</p>
                            </li> */}
                          
                            </ul>




                        </div>
                    </section>

                    </div>

                    </div>
                   
            
                    
                </div>





              



              
            </>

            
        )
    }

}

export default Experiences;



