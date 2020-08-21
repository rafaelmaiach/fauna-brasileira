import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchEndangeredFauna } from 'features/fauna/endangeredFaunaSlice';
import {
	continentalFishSelectorEndangered,
	marineFishSelectorEndangered,
	mammalSelectorEndangered,
	amphibianSelectorEndangered,
	aquaticInvertebrateSelectorEndangered,
	terrestrialInvertebrateSelectorEndangered,
	birdsSelectorEndangered,
	reptileSelectorEndangered,
} from 'state/selectors';

import Page from '@/layouts/Page';
import Card from '@/components/Card';
import FaunaInformation from '@/components/FaunaInformation';
import Loading from '@/components/Loading';

const FaunaAmeacada = () => {
	const dispatch = useDispatch();
	const [faunaData, setFaunaData] = useState([]);
	const [currentFauna, setCurrentFauna] = useState(null);

	useEffect(() => {
		dispatch(fetchEndangeredFauna());
	}, [dispatch]);

	const continentalFishData = useSelector(continentalFishSelectorEndangered);
	const marineFishData = useSelector(marineFishSelectorEndangered);
	const mammalData = useSelector(mammalSelectorEndangered);
	const amphibianData = useSelector(amphibianSelectorEndangered);
	const aquaticInvertebrateData = useSelector(aquaticInvertebrateSelectorEndangered);
	const terrestrialInvertebrateData = useSelector(terrestrialInvertebrateSelectorEndangered);
	const birdsData = useSelector(birdsSelectorEndangered);
	const reptileData = useSelector(reptileSelectorEndangered);

	useEffect(() => {
		setFaunaData([
			{ label: 'Peixes Continentais', quantity: continentalFishData.length, trigger: () =>  setCurrentFauna(continentalFishData), icon: require('../assets/images/animals/peixesContinentais.svg')},
			{ label: 'Peixes Marinhos', quantity: marineFishData.length, trigger: () =>  setCurrentFauna(marineFishData),icon: require('../assets/images/animals/peixesMarinhos.svg') },
			{ label: 'Mamíferos', quantity: mammalData.length, trigger: () =>  setCurrentFauna(mammalData), icon: require('../assets/images/animals/mamiferos.svg') },
			{ label: 'Anfíbios', quantity: amphibianData.length, trigger: () =>  setCurrentFauna(amphibianData), icon: require('../assets/images/animals/anfibios.svg') },
			{ label: 'Invertebrados Aquáticos', quantity: aquaticInvertebrateData.length, trigger: () =>  setCurrentFauna(aquaticInvertebrateData), icon: require('../assets/images/animals/invertebradosAquaticos.svg') },
			{ label: 'Invertebrados Terrestres', quantity: terrestrialInvertebrateData.length, trigger: () =>  setCurrentFauna(terrestrialInvertebrateData), icon: require('../assets/images/animals/invertebradosTerrestres.svg') },
			{ label: 'Aves', quantity: birdsData.length, trigger: () =>  setCurrentFauna(birdsData), icon: require('../assets/images/animals/aves.svg') },
			{ label: 'Répteis', quantity: reptileData.length, trigger: () =>  setCurrentFauna(reptileData), icon: require('../assets/images/animals/repteis.svg') },
		]);
	}, [
		continentalFishData,
		marineFishData,
		mammalData,
		amphibianData,
		aquaticInvertebrateData,
		terrestrialInvertebrateData,
		birdsData,
		reptileData,
	]);

	const {
		isLoading,
		error,
	} = useSelector(state => state.endangeredFauna);

	if (error) {
		return (
			<Page>
				<h1>Something went wrong</h1>
			</Page>
		);
	}

	if (isLoading) {
		return (
			<Page>
				<Loading />
			</Page>
		);
	}

	const faunaCards = faunaData.map(info => <Card key={info.label} {...info} />);

	return (
		<Page>
			<div className="container flex justify-center flex-wrap">
				{
					currentFauna
					?  <FaunaInformation information={currentFauna} reset={() => setCurrentFauna(null)} />
					: faunaCards
				}
			</div>
		</Page>
	);
}

export default FaunaAmeacada;
