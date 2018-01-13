import React from "react";
import './ClickItem.css';

const ClickItem = props => (
	<div className="flower">
		<div className="img-container">
			<img alt={props.name} src={props.image}/>
		</div>
			
	</div>
);

export default ClickItem;