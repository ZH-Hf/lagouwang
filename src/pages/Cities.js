import React, {
	Component
} from "react";
import City from "../components/City";
import $ from "jquery";
import './cities.css';
import { Link } from "react-router";
class Cities extends Component {
	constructor() {
		super();
		this.state = {
			data: []
		}
	}
	componentWillMount() {
		let _that = this;
		$.ajax({
			type: "post",
			url: "/api/address",
			async: true,
			success: function(data) {
				_that.setState({
					data: data.data
				})
			}
		});
	}
	render() {
		var list = this.state.data.map(function(elem) {
			return(
				<div className="city_table" key={elem.nameStr}>
					<p className="cities-header">{elem.nameStr}</p>
					<City city_data={elem}/>
				</div>

			)
		})
		return(
			<div>
				<Link to="Search" className="ret">&lt;</Link>
			{list}
			</div>
		)

	}
}
export default Cities;