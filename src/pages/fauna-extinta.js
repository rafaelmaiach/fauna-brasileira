import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchExtinctFauna } from 'features/fauna/extinctFaunaSlice';
import {
	continentalFishSelectorExtinct,
	marineFishSelectorExtinct,
	mammalSelectorExtinct,
	amphibianSelectorExtinct,
	aquaticInvertebrateSelectorExtinct,
	terrestrialInvertebrateSelectorExtinct,
	birdsSelectorExtinct,
	reptileSelectorExtinct,
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
		dispatch(fetchExtinctFauna());
	}, [dispatch]);

	const continentalFishData = useSelector(continentalFishSelectorExtinct);
	const marineFishData = useSelector(marineFishSelectorExtinct);
	const mammalData = useSelector(mammalSelectorExtinct);
	const amphibianData = useSelector(amphibianSelectorExtinct);
	const aquaticInvertebrateData = useSelector(aquaticInvertebrateSelectorExtinct);
	const terrestrialInvertebrateData = useSelector(terrestrialInvertebrateSelectorExtinct);
	const birdsData = useSelector(birdsSelectorExtinct);
	const reptileData = useSelector(reptileSelectorExtinct);

	useEffect(() => {
		setFaunaData([
			{ label: 'Peixes Continentais', quantity: continentalFishData.length, trigger: () =>  setCurrentFauna(continentalFishData)},
			{ label: 'Peixes Marinhos', quantity: marineFishData.length, trigger: () =>  setCurrentFauna(marineFishData) },
			{ label: 'Mamíferos', quantity: mammalData.length, trigger: () =>  setCurrentFauna(mammalData) },
			{ label: 'Anfíbios', quantity: amphibianData.length, trigger: () =>  setCurrentFauna(amphibianData) },
			{ label: 'Invertebrados Aquáticos', quantity: aquaticInvertebrateData.length, trigger: () =>  setCurrentFauna(aquaticInvertebrateData) },
			{ label: 'Invertebrados Terrestres', quantity: terrestrialInvertebrateData.length, trigger: () =>  setCurrentFauna(terrestrialInvertebrateData) },
			{ label: 'Aves', quantity: birdsData.length, trigger: () =>  setCurrentFauna(birdsData) },
			{ label: 'Répteis', quantity: reptileData.length, trigger: () =>  setCurrentFauna(reptileData) },
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

	const faunaCards = faunaData.map(info => <Card key={info.label} {...info} isExtinct />);

	return (
		<Page>
			<div className="container flex justify-center flex-wrap">
				{
					currentFauna
					? <FaunaInformation information={currentFauna} reset={() => setCurrentFauna(null)} />
					: faunaCards
				}
			</div>
		</Page>
	);
}

export default FaunaAmeacada;
