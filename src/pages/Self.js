import React,{Component} from 'react';
import {Link,IndexLink} from "react-router";
import './Self.css';
import $ from "jquery";
import Touxiang from './touxiang.png';
class Self extends Component{
	constructor(){
		super();
		this.state={
			name1:"",
			name2:"",
			name3:"",
			username:""
		}
		this.logout=this.logout.bind(this);
	}
	render(){
		return(
			<div className="content">
				<div className="logininfo">
					<div className={this.state.name1}>
					<div className="touxiang"><img src={Touxiang}/></div>
					<span className="username" >{this.state.username}</span>
					<p className="jl">简历&gt;</p>
					</div>
					<Link to="/login"><button className={this.state.name2} >登录/注册</button></Link>
				</div>
				<div className="choice">
					<ul>
						<li>投递</li>
						<li>面试</li>
						<li>邀约</li>
						<li>收藏</li>
					</ul>
				</div>
				<div className={this.state.name3} onClick={this.logout}>退出登录</div> 
			</div>
		)
	}
	logout(){
			localStorage.removeItem("isLogin");
			localStorage.removeItem("currentUser");
			window.location.href="/";
	}
	componentDidMount(){
		let isLogin=localStorage.getItem("isLogin");
		let	user=localStorage.getItem("currentUser");
		if(isLogin){
			this.setState({
				name1:"show",	
				name2:"hide",
				name3:"logout",
				username:user
			})		
		}else{
			this.setState({
				name1:"hide",	
				name2:"show",
				name3:"hide"
			})
		}
	}
	componentWillMount(){
		document.getElementsByTagName("body")[0].classList.remove("col");
	}
}
export default Self