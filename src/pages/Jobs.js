import React,{Component} from 'react';
import JobsList from "../components/JobsList";
import './Jobs.css';
class Jobs extends Component {
	/*constructor(){
		super();
	}*/

	render(){
		return (
			  <div>
                 <JobsList />
			  </div>
			)
	}
}

export default Jobs