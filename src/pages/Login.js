import React, {
	Component
} from 'react';
import axios from "axios";
import { browserHistory } from 'react-router';
import { Link, IndexLink } from "react-router";
import "./Login.css";
class Login extends Component {
	constructor() {
		super();
		this.state = ({
			username: "",
			password: ""
		})
		this.handleClick = this.handleClick.bind(this);
	}
	render() {
		return(
			/* <div className="login">
				  <div className="form-group">
				    <label htmlFor="exampleInputEmail1">Email address</label>
				    <input ref="username" type="text" className="form-control" id="exampleInputEmail1" placeholder="Email" />
				  </div>
				  <div className="form-group">
				    <label htmlFor="exampleInputPassword1">Password</label>
				    <input ref="pwd" type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
				  </div>
				  <button onClick={this.handleSubmit} className="btn btn-default">提交</button>
			   </div>*/
			<div className="cont">
				  <div className="new_wrapper">
				  	<input type="text" placeholder="已验证手机/邮箱" className="top" ref="username"/><span ref="usm" className="username"></span>
				  	<input type="password" placeholder="密码" className="bottom" ref="password"/>
				  	<button className="login" onClick={this.handleClick}>登录</button>
				  </div>
				  <div className="register_text">还没帐号？</div>
				  <Link to="register"><button className="regist">注册</button></Link>
			  </div>
		)
	}
	handleClick(event) {
		let username = this.refs.username.value,
			password = this.refs.password.value,
			warn = this.refs.usm;
		let users = JSON.parse(localStorage.getItem("user")) || [];
		let isHave;
		let currIndex;
		for(let i = 0; i < users.length; i++) {
			if(users[i].phoneNumber === username) {
				isHave = true;
				currIndex = i;
				break;
			} else {
				isHave = false;
				currIndex = -1;
			}
		}
		users.forEach(function(element, index) {
			if(isHave) {
				if(users[currIndex].password === password) {
					console.log("登录成功");
					window.location.href = "/";
				} else {
					warn.innerHTML = "密码或者账号错误"
				}
			} else {
				warn.innerHTML = "密码或者账号错误"
			}
		})
		console.log(users)
	}
	componentDidMount() {
		document.getElementsByTagName("body")[0].classList.add("col");
	}

}
export default Login