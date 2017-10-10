import React, { Component } from 'react';
import './App_login.css';
//动态路由：当路由匹配不同路径的时候，加载的都是同一个组件，需要通过不同路径来作为参数加载不同的数据
class App_login extends Component {
  render() {
    return (
      <div className="App_login">
       login
      </div>
    );
  }
}

export default App_login;
