import React,{Component} from 'react';

class Test extends Component {
	render() {
		const myDate = new Date();
			myDate.getFullYear();
			myDate.getMonth();
			myDate.getDate();
			myDate.getHours();       
			myDate.getMinutes();
		return (
			<div className="Test">
				{myDate + ""}
			</div>
		);
	}
}
  
export default Test;
