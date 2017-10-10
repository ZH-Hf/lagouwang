import React from 'react';
import {render} from 'react-dom';
import { Router, Route,IndexRoute,browserHistory} from 'react-router';
import './index.css';
import App from './App';
import App_login from './App_login';
import Jobs from './pages/Jobs';
import Search from './pages/Search';
import User from './pages/User';
import registerServiceWorker from './registerServiceWorker';

//Router：路由配置的容器 ，Route路由配置规则组件
render(
    <Router history={browserHistory}> 
      <Route path="/" component={App}>
        <IndexRoute component={Jobs}/>
        <Route path="search" component={Search} />
        <Route path="user/:userId" component={User} />
      </Route>
      <Route path="user/api/login" component={App_login} />
      <Route path="api/login" component={App_login} />
      
   </Router>
	, document.getElementById('root'));
registerServiceWorker();
