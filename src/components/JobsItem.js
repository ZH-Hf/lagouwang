import React,{Component} from 'react';
class JobsItem extends Component{
	/*constructor(){
		super();
	}*/
	render(){
		let {list} = this.props;
//		let imgSrc = '//static.lagou.com'+{list.companyLogo};
		return(
			<li className="JobsItem">
				<img alt=""className="item-logo" src={"//static.lagou.com/"+list.companyLogo}/>
				<div className="item-desc">
					<h2 className="item-title">{list.companyName}</h2>
					<p className="item-info">
						<span className="item-pos">{list.positionName}[{list.city}]</span>
						<span className="item-salary">{list.salary}</span>
					</p>
					<p className="item-time">{list.createTime}</p>
				</div>
			</li>
		)
	}
}

export default JobsItem;
