import React, { Component } from "react";
import _ from "lodash";

class TableBody extends Component {
	rednerCell = (item, column) => {
		if (column.content) return column.content(item); // if the column is a like button or delete button we render it

		return _.get(item, column.path); // underscore gives us the ability to get nested properties like genre._id
	};

	createKey = (item, column) => {
		return item[this.props.valueProperty] + (column.path || column.key);
	};

	render() {
		const { data, columns, valueProperty } = this.props;

		return (
			<tbody>
				{data.map((item) => (
					<tr key={item[valueProperty]}>
						{columns.map((column) => (
							<td key={this.createKey(item, column)}>
								{this.rednerCell(item, column)}
							</td>
						))}
					</tr>
				))}
			</tbody>
		);
	}
}

TableBody.defaultProps = {
	valueProperty: "_id",
};

export default TableBody;
