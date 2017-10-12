import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import './index.css';
import App from './App';
import App_login from './pages/Login';
import App_register from './pages/Register';
import Jobs from './pages/Jobs';
import Search from './pages/Search';
import User from './pages/User';
import JobDetail from './pages/JobsDetail';
import registerServiceWorker from './registerServiceWorker';

//Router：路由配置的容器 ，Route路由配置规则组件
render(
	<Router history={browserHistory}> 
      <Route path="/" component={App}>
        <IndexRoute component={Jobs}/>
        <Route path="search" component={Search} />
        <Route path="jobdetail" component={JobDetail} />
        <Route path="user/:userId" component={User} />
      </Route>
      <Route path="user/login" component={App_login} />
      <Route path="login" component={App_login} />
      <Route path="user/register" component={App_register} />
      <Route path="register" component={App_register} />

      
   </Router>, document.getElementById('root'));
registerServiceWorker();