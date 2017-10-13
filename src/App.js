import React, { Component } from 'react';
import {Link,IndexLink} from 'react-router';
import './App.css';
import './icon2.png'
//动态路由：当路由匹配不同路径的时候，加载的都是同一个组件，需要通过不同路径来作为参数加载不同的数据
class App extends Component {
	componentWillMount(){
		localStorage.setItem("sel_city","全国");
	}
  render() {
    return (
      <div className="App">
       	<div className="Hearder">
       		拉勾网
       	</div>
       	{this.props.children}
        <div className="Footer">
        	<IndexLink to="/" activeClassName="active"><span></span>职位</IndexLink>
        	<Link to="/search" activeClassName="active"><span></span>搜索</Link>	
        	<Link to="/user/zhonghao" activeClassName="active"><span></span>我的</Link>
        </div>
      </div>
    );
  }
}

export default App;
