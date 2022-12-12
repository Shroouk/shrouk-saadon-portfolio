import React, { Component } from 'react'
import Tile from "../Tile/Tile";

class Gallery extends Component {
	render() {
		return (
			<div className="gallery fadeIn">
			{
				this.props.data.map( data => 
					<Tile key={data.id}
						id={data.id}
						src={data.src}				
						name={data.name}
						desc={data.desc}
						href={data.href}
						_openImageView={this.props._openImageView} />
				)
			}

          
	</div>
		)
	}
}

export default Gallery;