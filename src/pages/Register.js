import React,{Component} from 'react';
import './Register.css';
import {Link,IndexLink} from "react-router";
class Register extends Component{
	constructor(){
		super();
		this.state={
			phoneNumber:"",
			password:"",
			users:[]
		}
		this.handleChange=this.handleChange.bind(this);
		this.handleClick=this.handleClick.bind(this);
	}
	handleChange(event){
		if(event.target.name=="phone"){
			this.setState({
			phoneNumber:event.target.value,
		})
		}else if(event.target.name=="pwd"){
			this.setState({
			password:event.target.value
		})
		}

	}
	handleClick(){
		let phoneTest=/^(13[0-9]|15[0|1|3|6|7|8|9]|18[8|9])\d{8}$/;
		let resultTest=phoneTest.test(this.state.phoneNumber);
		let pwdTest=/^[a-zA-Z0-9]{6,18}$/;
		let resultPwd=pwdTest.test(this.state.password);
		if(resultTest&&resultPwd){
			
			let user={"phoneNumber":this.state.phoneNumber,"password":this.state.password}
			var arr=JSON.parse(localStorage.getItem("user"))||[];
			console.log(arr)
			arr.push(user);
			localStorage.setItem("user",JSON.stringify(arr));
			window.location.href="/login";
			alert("注册成功")
		}else{
			alert("注册失败")
		}
	}
	componentDidUpdate(prevProps,prevState){
		let phoneTest=/^(13[0-9]|15[0|1|3|6|7|8|9]|18[8|9])\d{8}$/;
		let resultTest=phoneTest.test(this.state.phoneNumber);
		if(resultTest){
			this.refs.phoneInfo.innerHTML="号码正确"
		}else{
			this.refs.phoneInfo.innerHTML="请输入有效号码"
		}
		
		let pwdTest=/^[a-zA-Z0-9]{6,18}$/;
		let resultPwd=pwdTest.test(this.state.password);
		if(resultPwd){
			this.refs.pwdInfo.innerHTML="密码格式正确"
		}else{
			this.refs.pwdInfo.innerHTML="密码格式错误"
		}
		
		console.log(this.state.phoneNumber+"--------------"+this.state.password);
		
	}
	render(){
		return(
			<div className="conta">
				<input type="text" name="phone" placeholder="手机号" onChange={this.handleChange} ref="phoneNumber"/><span ref="phoneInfo" className="phone"></span>
				<input type="text" placeholder="请证明你不是机器人" />
				<input type="text" placeholder="短信验证码" />
				<input type="password" name="pwd" placeholder="设置6-18位密码" onChange={this.handleChange} ref="password"/><span ref="pwdInfo" className="pwd"></span>
				<button className="register" onClick={this.handleClick}>注册</button>
				<div className="register_text">已有帐号？</div>
				<Link to="login"><button className="regist">登录</button></Link>
				<div className="file">点击注册,即代表您同意<a href="#">&lt;拉钩用户协议&gt;</a></div>
			</div>
		)
	}
	componentDidMount(){
		document.getElementsByTagName("body")[0].classList.add("col");
	}
}
export default Register