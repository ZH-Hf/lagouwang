import React, {
	Component
} from 'react';
import JobsItem from './JobsItem';
import JobsData from './JobsData.json';
class JobsList extends Component {
	componentWillMount() { //组件初始化已经完成，将要插入真实的dom节点。做异步请求，请求当前组件的数据
		this.setState({
			list:JobsData.content.data.page.result
		})
	}
	render() {
		var list = this.state.list.map(function(elem) {
			
			return <JobsItem list={elem} key={elem.positionId} />;
		})
		return(
			<ul>
				{list}
			</ul>
		)

	}
}

export default JobsList;