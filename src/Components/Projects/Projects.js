import React, { Component } from 'react';
import Gallery from '../UI/Gallery/Gallery';
import ImageView from '../UI/ImageView/ImageView';


import './Projects.css'

class Projects extends Component {
  
   
		state = {
			data: [],
			activeID: 0,
			imageView: false
		}

 
 


    componentWillMount() {
		this._loadData('./assests/data.json')	
	}
	/* componentWillUnmount() {
		this._loadData.abort()
	} */
	// Fetch data, then clone it to state using destructuring
	// XHR Fallback
	_loadData(url) {
		fetch(url, { method: 'GET' })
			.then(response => response.json())
			.then(json => this.setState({ data: [...json.gallery] }) )
			.catch((err) => {
				console.log(err.message)
				try {
					const xhr = new XMLHttpRequest()
					xhr.open('GET', url)
					xhr.responseType = 'json'
					
					xhr.onload = () => {
						let json = xhr.response
						this.setState({ data: [...json.gallery] })
					}
					
					xhr.onerror = () => {
						throw new Error('XMLHttpRequest Failed...')
					}
					
					xhr.send()
				} catch (e) {
					console.log(e.message)
				}
			})
	}
	_openImageView(id) {
		this.setState({
			activeID: id,
			imageView: true
		});
	}
	_closeImageView() {
		this.setState({
			imageView: false
		})
	}



    render(){
      
        return(
            <>        
                <div className='container '> 
                   
                    <div className='row txt-bg'>
                    <div>
                    <section id="stack" className="stack">
                        <h2 className="section-title mt-5 mb-5">Projects</h2>
                        <div className="stack-container skills-sec">
                     
                        
                        <div className="wrapper">
				{
					this.state.imageView ? 
					<ImageView {...this.state.data[this.state.activeID]}
						_closeImageView={this._closeImageView.bind(this)} />
						:
					<Gallery data={this.state.data}
						_openImageView={this._openImageView.bind(this)} />
				}
			</div>
         


                        </div>
                    </section>

                    </div>

                    </div>
                   
            
                    
                </div>





              



              
            </>

            
        )
    }

}

export default Projects;



