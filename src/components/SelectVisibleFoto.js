import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import PropTypes from 'prop-types';

export const SelectVisibleImage = ({visibleImage,handleChangeSelect}) => {
	return(
		<SelectField
			floatingLabelText="Количество изображений"
			value={visibleImage}
			onChange={handleChangeSelect}
		>
			<MenuItem value={10} primaryText="10" />
			<MenuItem value={15} primaryText="15" />
			<MenuItem value={20} primaryText="20" />
			<MenuItem value={25} primaryText="25" />
			<MenuItem value={30} primaryText="30" />
		</SelectField>
	)
};

SelectVisibleImage.propTypes = {
	visibleImage: PropTypes.number,
	handleChangeSelect: PropTypes.func
};