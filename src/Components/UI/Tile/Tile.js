import React, { Component } from 'react'
import Image from '../Image/Image';

class Tile extends Component {
	_handleClick() {
		this.props._openImageView(this.props.id)
	}
	render() {
		return(
			<div className="gallery-tile" onClick={this._handleClick.bind(this)}>
			<div className="picture-info">
				<h2>{this.props.name}</h2>
				{/*<p>{this.props.desc}</p>*/}
			</div>
			<Image
				CSSClass="tile-image test"
				src={this.props.src} 
				alt={this.props.name} />
		</div>
	
    )
	}
}

export default Tile;