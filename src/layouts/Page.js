import React from 'react';
import PropTypes from 'prop-types';

import Header from '@/components/Header';

import '@/styles/bulma.scss';

const Page = ({ children }) => (
	<div className="flex flex-col min-h-screen">
		<Header />
		<main className="flex-1 bg-green-100">
			{children}
		</main>
	</div>
);

Page.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Page;
