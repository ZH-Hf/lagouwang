import React,{Component} from 'react';
import $ from "jquery";
import {Link,IndexLink} from 'react-router';
class JobsItem extends Component{
	constructor(){
		super();
		this.handleDetail= this.handleDetail.bind(this);
	}
	handleDetail(event){
		console.log(this.props.list.positionId);
		var posId = this.props.list.positionId;
//		var searchStr = "?"+
	}
	render(){
		let {list} = this.props;
//		let imgSrc = '//static.lagou.com'+{list.companyLogo};
		return(
			<Link to={"jobdetail?id="+this.props.list.positionId}>
			<li className="JobsItem" onClick={this.handleDetail}>
				<img alt="" className="item-logo" src={"//static.lagou.com/"+list.companyLogo}/>
				<div className="item-desc">
					<h2 className="item-title">{list.companyName}</h2>
					<p className="item-info">
						<span className="item-pos">{list.positionName}[{list.city}]</span>
						<span className="item-salary">{list.salary}</span>
					</p>
					<p className="item-time">{list.createTime}</p>
				</div>
			</li>
			</Link>
			
		)
	}
}

export default JobsItem;
