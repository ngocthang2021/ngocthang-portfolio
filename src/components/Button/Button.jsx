import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

function Button({ className, onClick, children }) {
	return (
		<button
			className={`btn ${className ? `btn-${className}` : null} `}
			onClick={onClick ? () => onClick() : null}
		>
			{children}
		</button>
	);
}

Button.propTypes = {
	onClick: PropTypes.func,
};

export default Button;
