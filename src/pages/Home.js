import React, {Component} from 'react';
// import TestRedux from '../redux/testRedux'

class Home extends Component{
	constructor(props){
		super(props);
		this.state = {
			count: 0
		}
	}
	handleClick(){
		this.setState({
			count: ++this.state.count
		})
	}
	componentDidMount(){
		/*// 手动编译，引入store
		 TestRedux()*/
	}
	
	render(){
		return(
			<div>
				This is Home <br />
				当前计数：{this.state.count} <br/>
				<button onClick = {() => this.handleClick()}>自增</button>
			</div>
		)
	}
}
export default Home