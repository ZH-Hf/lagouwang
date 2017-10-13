import React, {
	Component
} from "react";
import { Link } from "react-router";
class City_U extends Component {
	constructor(){
		super();
		this.handleClick = this.handleClick.bind(this);
		this.state={
			cityname:""
		}
		
	}
	handleClick(){
		localStorage.setItem("sel_city",this.state.cityname)
	}
	componentDidMount(){
		this.setState({
			cityname:this.props.city_list
		});
	}
	render() {
//		console.log(this.props)
		return (
			<Link to="Search" className='cities-item' onClick={this.handleClick}>
				{this.props.city_list}
			</Link>)
		
	}
}
export default City_U;