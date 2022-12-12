import React, { Component } from 'react'

const Image = ( props ) => (
	<img
		className={props.CSSClass}
		src={props.src} 
		alt={props.name} />
)

export default Image;