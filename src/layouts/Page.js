import React from 'react';
import PropTypes from 'prop-types';

import Header from '@/components/Header';

import '@/styles/bulma.scss';

const Page = ({ children }) => (
	<div>
		<Header />
		<main>
			{children}
		</main>
	</div>
);

Page.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Page;
