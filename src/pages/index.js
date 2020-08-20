import React from 'react';
import { Link } from 'gatsby';

import Page from '@/layouts/Page';

import ImagemMapBrasil from 'assets/images/components/mapa-brasil.png';

import './index.scss';

const Home = () => (
	<Page>
		<div className="flex justify-center items-center flex-col lg:flex-row p-8">
			<img src={ImagemMapBrasil} className="mapa-brasil" alt="Brazil map with some animals over it" />
			<div className="flex flex-col items-start mt-8">
				<span className="text-lg lg:text-2xl lg:p-10">
					A <b>FAUNA BRASILEIRA</b> tem como objetivo deixar acessível os dados sobre os animais ameaçados de extinção e os que já foram extintos, assim como
					a justificativa para o ocorrido e o que pode ser feito para ajudar na preservação das espécies ameaçadas.
				</span>
				<div className="lg:p-10 flex mt-4">
					<Link to="/fauna-ameacada/" className="button bg-green-500 text-yellow-400 has-text-weight-bold border-none mr-8">
						Ver Fauna Ameaçada
					</Link>
					<Link to="/fauna-extinta/" className="button bg-green-500 text-yellow-400 has-text-weight-bold border-none">
						Ver Fauna Extinta
					</Link>
				</div>
			</div>
		</div>
	</Page>
);

export default Home;
