import axios from 'axios';

export async function getEndangeredFauna() {
	const url = 'https://apirest-animais.herokuapp.com/api-animais/ameacado';

	const { data } = await axios.get(url);
	return data;
};

export async function getExtinctFauna() {
	const url = 'https://apirest-animais.herokuapp.com/api-animais/extinto';

	const { data } = await axios.get(url);
	return data;
};
