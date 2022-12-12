import React, { Component } from 'react';
import Image from '../Image/Image';


class ImageView extends Component {
	render() {
		return(
			<div className="imageview-wrapper fadeIn">
				<div className="imageview" >
					<Image CSSClass="imageview-image test"
						src={this.props.src}
						alt={this.props.name} 
						key={this.props.id}	
						/>
					<div className="imageview-info">
						<button className="imageview-close" onClick={this.props._closeImageView}>x</button>
						<h2>{this.props.name}</h2>
						<p className='img-desc'>{this.props.desc}</p>
						{/* <h3>Using: </h3> */}
						<ul>
							{this.props.tags.map(tag => <li className="badge tags-badge" key={Math.random() }>{tag}</li>)}
						</ul>


						{/* {this.props.tags.map((tag) => {
							return(
								<>
								<button type="button" class="btn btn-secondary">{tag}</button>
								</>
							)
						})} */}

						<a className='web-link' target="blank" href={this.props.href}> view website <svg width="24px" height="24px" viewBox="0 0 24 24" ><path d="M15.5 2.25a.75.75 0 01.75-.75h5.5a.75.75 0 01.75.75v5.5a.75.75 0 01-1.5 0V4.06l-6.22 6.22a.75.75 0 11-1.06-1.06L19.94 3h-3.69a.75.75 0 01-.75-.75z"/><path d="M2.5 4.25c0-.966.784-1.75 1.75-1.75h8.5a.75.75 0 010 1.5h-8.5a.25.25 0 00-.25.25v15.5c0 .138.112.25.25.25h15.5a.25.25 0 00.25-.25v-8.5a.75.75 0 011.5 0v8.5a1.75 1.75 0 01-1.75 1.75H4.25a1.75 1.75 0 01-1.75-1.75V4.25z"/></svg>
						</a>
					</div>
			</div>
           
		</div>
		)
	}
}

export default ImageView