import React, {
	Component
} from 'react';
import { Link, IndexLink } from 'react-router';
import './User.css';
class User extends Component {

	componentWillMount(){
		document.getElementsByTagName("body")[0].classList.remove("col");
		
	}
	render() {
		return(
			<div id="content">
				<div className="logininfo">
			  		<div className='nologin center'>
			  			<Link to="login" className='loginbut'>登录/注册</Link>
			  		</div>
			  	</div>
			  	<div className="buttons">
			  		<Link className="button deliver" to="#">投递</Link>
                	<Link className="button interview" to="#">面试</Link>
                	<Link className="button invitation" to="#">邀约</Link>
                	<Link className="button collect" to="#">收藏</Link>
			  	</div>
			</div>
		)
	}
}

export default User