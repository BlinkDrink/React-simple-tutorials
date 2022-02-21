import React from "react";

const Select = ({ name, label, options, error, ...rest }) => {
	return (
		<div className="form-group">
			<label htmlFor={name}>{label}</label>
			<select name={name} id={name} {...rest} className="form-control">
				<option value="" />
				{options.map((options) => (
					<option key={options._id} value={options._id}>
						{options.name}
					</option>
				))}
			</select>
			{error && <div className="aler alert-danger">{error}</div>}
		</div>
	);
};

export default Select;
