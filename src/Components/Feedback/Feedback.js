import React, { Component } from 'react';
import DemoCarousel from '../UI/Carousel/Carousel';


import './Feedback.css'

class Feedback extends Component {
  
        
 
 
    render(){
      
        return(
            <>        
                <div className='container '> 
                   
                    <div className='row txt-bg'>
                    <div>
                    <section id="stack" className="stack">
                        <h2 className="section-title mt-5 mb-5">Feedback</h2>
                        <div className="stack-container skill-sec feedback-sec">
                

                    
                            <DemoCarousel/>



                        </div>
                    </section>

                    </div>

                    </div>
                   
            
                    
                </div>





              



              
            </>

            
        )
    }

}

export default Feedback;



