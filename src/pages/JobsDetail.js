import React, {
	Component
} from "react";
import $ from "jquery";
import './JobsDetail.css';
import "../icon.png";
class JobDetail extends Component {
	constructor() {
		super();
		this.state = {
			posID: window.location.search.split("=")[1],
			job_data: {}
		}

	}
	componentWillMount() {
		var _that = this;
		$.ajax({
			type: "post",
			data: {
				page: 0
			},
			url: "/api/jobs_data",
			async: true,
			success: function(data) {
				for(let i = 0, len = data.length; i < len; i++) {
					if(data[i].positionId == _that.state.posID) {
						console.log(data[i]);
						_that.setState({
							job_data: data[i]
						})
						break;

					}
				}
			}
		});
	}
	render() {
		return(
			<div id="content">
				<div className="postitle">
				<h2 className="title">{this.state.job_data.companyName}{this.state.job_data.positionName}</h2>
				<div className="collicon activeable">
				</div>
			</div>
			<div className="detail">
				<div className="items">
					<span className="item salary">
                        <em className="icon"></em>
                        <span className="text">{this.state.job_data.salary}</span>
					</span>
					<span className="item workaddress">
                        <em className="icon"></em>
                        <span className="text">{this.state.job_data.city}</span>
					</span>
					<span className="item jobnature">
                        <em className="icon"></em>
                        <span className="text">全职</span>
					</span>
					<span className="item workyear">
                        <em className="icon"></em>
                        <span className="text">3-5年</span>
					</span>
					<span className="item education">
                        <em className="icon"></em>
                        <span className="text">
                            本科及以上                        </span>
					</span>
				</div>
				<div className="temptation">
					职位诱惑：六险一金
				</div>
			</div>
		</div>
		)
	}
}
export default JobDetail;