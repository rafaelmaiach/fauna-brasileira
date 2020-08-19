import React from 'react';

function Card({ label, quantity, trigger, isExtinct = false }) {
	let quantityText;

	if (isExtinct) {
		quantityText = quantity === 0 ? 'Nenhum animal extinto' : `${quantity} animais extintos`;
	} else {
		quantityText = quantity === 0 ? 'Nenhum animal ameaçado de extinção' : `${quantity} animais ameaçados de extinção`;
	}

	return (
		<div className="card lg:w-1/3 md:w-full mt-8 mx-2 flex justify-between flex-col">
			<div className="card-content">
				<p className="title">
					{ label }
				</p>
				<p className="subtitle">
					{ quantityText }
				</p>
			</div>
			<footer className="card-footer">
				<button className="card-footer-item" onClick={trigger}>Ver</button>
			</footer>
		</div>
	);
}

export default Card;
