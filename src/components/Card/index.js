import React from 'react';

function Card({ label, quantity, trigger, isExtinct = false, icon }) {
	let quantityText;

	if (isExtinct) {
		quantityText = quantity === 0 ? 'Nenhum animal extinto' : `${quantity} animais extintos`;
	} else {
		quantityText = quantity === 0 ? 'Nenhum animal ameaçado de extinção' : `${quantity} animais ameaçados de extinção`;
	}

	return (
		<div className="card lg:w-1/3 md:w-full mt-8 mx-2 flex justify-between flex-col" onClick={trigger}>
			<div className="card-content">
				<p className="title">
					{ label }
				</p>
				<p className="subtitle">
					{ quantityText }
				</p>
				<img className="animalsIcons" src={icon}/>
			</div>
			
		</div>
	);
}

export default Card;
