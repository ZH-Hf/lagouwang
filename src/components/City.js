import React, {
	Component
} from "react";
import City_U from "./City_U";
import $ from "jquery";
class City extends Component {
	render() {
		var _that =this;
		var list = this.props.city_data.cityList.map(function(elem,index) {
			return(
				<div key={elem}>

				<City_U city_list={elem} />
				</div>
			)
		})
		return (<div>{list}</div>)
	}
}

export default City;