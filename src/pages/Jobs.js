import React, {
	Component
} from 'react';
import JobsList from "../components/JobsList";
import './Jobs.css';
import $ from "jquery";
class Jobs extends Component {
	constructor() {
		super();
		this.toLoadMore = this.toLoadMore.bind(this);
		this.state = {
			page: 1,
			getData: []
		}

	}
	componentWillMount() {
		document.getElementsByTagName("body")[0].classList.remove("col");
		var _that = this;
		$.ajax({
			type: "post",
			data: {
				page: this.state.page
			},
			url: "/api/jobs_data",
			async: true,
			success: function(data) {
				console.log(data);
				_that.setState({
					page: _that.state.page + 1,
					getData: _that.state.getData.concat(data)
				})
			}
		});
	}
	comonentDidMount() {

	}
	toLoadMore(e) {
		//		$("ul").clone(true).insertBefore(".loadMore");
		var _that = this;
		$.ajax({
			type: "post",
			data: {
				page: this.state.page
			},
			url: "/api/jobs_data",
			async: true,
			success: function(data) {
				console.log(data);
				_that.setState({
					page: _that.state.page + 1,
					getData: _that.state.getData.concat(data)
				})
			}
		});

	}
	render() {
		return(
			<div className="container">
                <JobsList list={this.state.getData}/>
				<p className="loadMore" onClick={this.toLoadMore}>加载更多...</p>
			 </div>
		)
	}
}

export default Jobs