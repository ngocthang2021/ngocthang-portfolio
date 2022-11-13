import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

function Button({ className, onClick, children }) {
	return (
		<button
			className={`btn btn-${className}`}
			onClick={onClick ? () => onClick() : null}
		>
			{children}
		</button>
	);
}

Button.propTypes = {
	className: PropTypes.string,
	onClick: PropTypes.func,
};

export default Button;
