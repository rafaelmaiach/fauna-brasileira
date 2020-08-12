import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

function NavbarLink({ children, to }) {
	const classNames = `
		navbar-item
		text-yellow-300
		hover:text-green-800
		hover:bg-green-200
		focus:text-green-800
		focus:bg-green-200
	`;

	const activeClassNames = `
		bg-green-200
		text-green-800
		font-bold
	`;

	return (
		<Link to={to} className={classNames} activeClassName={activeClassNames}>
			{children}
		</Link>
	)
}

export default NavbarLink;

NavbarLink.propTypes = {
	children: PropTypes.node.isRequired,
	to: PropTypes.string.isRequired,
};
