import React from "react";

const Select = ({ options, name, label, errors, ...rest }) => {
	return (
		<div className='form-group'>
			<label htmlFor={name}>{label}</label>
			<select name={name} id={name} {...rest} className='form-control'>
				<option value='' />
				{options.map((option) => (
					<option key={option._id} value={option._id}>
						{option.name}
					</option>
				))}
			</select>
			{errors && <div className='alert alert-danger'>{errors}</div>}
		</div>
	);
};

export default Select;
