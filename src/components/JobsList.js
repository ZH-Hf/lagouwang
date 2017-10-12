import React, {
	Component
} from 'react';
import JobsItem from './JobsItem';
import $ from "jquery";
class JobsList extends Component {
	constructor() {
		super();
		this.state={
			list:[]
		}
		
	}
	componentWillMount() { //组件初始化已经完成，将要插入真实的dom节点。做异步请求，请求当前组件的数据
		var _that = this;
		/*$.ajax({
			type:"post",
			url:"/api/jobs_data",
			async:true,
			success:function(data){
				_that.setState({
					list: data.content.data.page.result,
				})
			}
		});*/
		
		
	}
	componentDidMount(){
		
	}

	render() {
		
		var list = this.props.list.map(function(elem) {
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