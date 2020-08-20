import React from 'react'

import './styles.scss';

function Loading() {
	return (
		<div className="w-full flex justify-center items-center">
			<div class="lds-ring">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
}

export default Loading;
