import React,{Component} from 'react';
import './Search.css';
import City from './address.json';
import $ from "jquery";
class Search extends Component{
	constructor(){
		super();
		this.state={
			cities:City
		}
		console.log(this.state.cities)
		this.handleClick=this.handleClick.bind(this);
	}
	handleClick(){
		
	}
	render(){
		var list=this.state.cities.map(function(elem){
					return <Cities list={elem} key={elem.nameStr}/>;
				});
				console.log(list)
		return(
			<div className="linputer">	
				<div className="ret">&lt;</div>
				 <div className="button1" onClick={this.handleClick}>
				 	<span className="currentCity">全国</span>
				 	<span> v</span>
				 </div>
				 <div className="rinput">
				 	<input className="inputer" type="text" placeholder="搜索职位或公司"/>
				 	<span className="sear"><em className="searchicon"></em></span>
				 </div>
				 <div className="city" ref="city">{list}</div>
			</div>
		)
	}
	componentDidMount(prevProps,prevState){
		$(".city").css("display","none");
		$(".ret").css("display","none");
		$(".button1").click(function(){
			$(".city").css("display","block");
			$(".ret").css("display","block");
		});
		$(".cities").on("click","li",function(){
			$(".currentCity").html($(this).html());
			$(".city").css("display","none");
			$(".ret").css("display","none");
		});
		$(".ret").click(function(){
			$(".city").css("display","none");
			$(".ret").css("display","none");
		})
	}
	componentWillMount(){
		document.getElementsByTagName("body")[0].classList.remove("col");
	}

}
class Cities extends Component{
	constructor(){
		super();
	}
	render(){
		let {list}=this.props;
		console.log({list})
		var arr = list.cityList.map(function(elem){
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