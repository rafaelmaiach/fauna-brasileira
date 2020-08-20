import React from 'react';
import Page from '@/layouts/Page';
import ImagemMapBrasil from '../assets/images/components/mapa-brasil.png';

import './index.scss';
const Home = () => (
	<Page>
		<div className="sobre">
			<img src={ImagemMapBrasil} className="mapa-brasil"/>
			<span className="txt-sobre">A <span class="title-fauna">FAUNA BRASILEIRA</span> tem como objetivo deixar acessível os dados sobre animais ameaçados de extinção e os que já foram extintos, assim como
				a justificativa para o ocorrido e oque pode ser feito para ajudar na preservação das espécies ameaçadas.
				<button className="btn-acessar-lista">Acessar Lista</button>
			</span>
		</div>
	</Page>
);

export default Home;
