import React, {
	Component
} from 'react';
import './Search.css';
import City from './address.json';
import $ from "jquery";
import { Link } from "react-router";
class Search extends Component {
	constructor() {
		super();
		this.state = {
			cities: City
		}
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {

	}
	
	componentDidMount(){
		var sel_city = localStorage.getItem("sel_city");
		$(".sel_city").html(sel_city);
		
	}
	render() {
		
		return(
			<div className="linputer">	

				 <div className="button1" onClick={this.handleClick}>
				 	<Link to="Cities"className="sel_city"></Link>
				 	<span>v</span>
				 </div>
				 <div className="rinput">
				 	<input className="inputer" type="text" placeholder="搜索职位或公司"/>
				 	<span className="sear"><em className="searchicon"></em></span>
				 </div>
				 
			</div>
		)
	}

	componentWillMount() {
		document.getElementsByTagName("body")[0].classList.remove("col");
	}

}
class Cities extends Component {
	constructor() {
		super();
	}
	render() {
		let {
			list
		} = this.props;
		console.log({
			list
		})
		var arr = list.cityList.map(function(elem) {
			return <li key={elem}>{elem}</li>
		});
		return(
			<div className="cities">
				<p className="nameStr">{list.nameStr}</p>
				<ul className="ct">
					{arr}
				</ul>
			</div>
		)
	}
}

export default Search