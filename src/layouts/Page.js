import React from 'react';
import PropTypes from 'prop-types';

import '@/styles/bulma.scss';

const Page = ({ children }) => (
	<div>
		<main>
			{children}
		</main>
	</div>
);

Page.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Page;
