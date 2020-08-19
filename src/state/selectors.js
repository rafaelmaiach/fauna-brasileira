import { createSelector } from '@reduxjs/toolkit';

/**
 * Grupos Taxonomicos:
 * Peixes continentais
 * Peixes Marinhos
 * Mamíferos
 * Anfíbios
 * Invertebrados Aquáticos
 * Invertebrados Terrestres
 * Aves
 * Répteis
 */
const createTaxonomicGroupSelectorEndangeredFauna = group => createSelector(
	state => state.endangeredFauna,
	endangeredFauna => endangeredFauna.list.filter(({ grupo_taxonomico }) => grupo_taxonomico.toLowerCase().includes(group)),
);

const createTaxonomicGroupSelectorExtinctFauna = group => createSelector(
	state => state.extinctFauna,
	endangeredFauna => endangeredFauna.list.filter(({ grupo_taxonomico }) => grupo_taxonomico.toLowerCase().includes(group)),
);

export const continentalFishSelectorEndangered = createTaxonomicGroupSelectorEndangeredFauna('peixes continentais');
export const marineFishSelectorEndangered = createTaxonomicGroupSelectorEndangeredFauna('peixes marinhos');
export const mammalSelectorEndangered = createTaxonomicGroupSelectorEndangeredFauna('mamíferos');
export const amphibianSelectorEndangered = createTaxonomicGroupSelectorEndangeredFauna('anfíbios');
export const aquaticInvertebrateSelectorEndangered = createTaxonomicGroupSelectorEndangeredFauna('invertebrados aquáticos');
export const terrestrialInvertebrateSelectorEndangered = createTaxonomicGroupSelectorEndangeredFauna('invertebrados terrestres');
export const birdsSelectorEndangered = createTaxonomicGroupSelectorEndangeredFauna('aves');
export const reptileSelectorEndangered = createTaxonomicGroupSelectorEndangeredFauna('répteis');

export const continentalFishSelectorExtinct = createTaxonomicGroupSelectorExtinctFauna('peixes continentais');
export const marineFishSelectorExtinct = createTaxonomicGroupSelectorExtinctFauna('peixes marinhos');
export const mammalSelectorExtinct = createTaxonomicGroupSelectorExtinctFauna('mamíferos');
export const amphibianSelectorExtinct = createTaxonomicGroupSelectorExtinctFauna('anfíbios');
export const aquaticInvertebrateSelectorExtinct = createTaxonomicGroupSelectorExtinctFauna('invertebrados aquáticos');
export const terrestrialInvertebrateSelectorExtinct = createTaxonomicGroupSelectorExtinctFauna('invertebrados terrestres');
export const birdsSelectorExtinct = createTaxonomicGroupSelectorExtinctFauna('aves');
export const reptileSelectorExtinct = createTaxonomicGroupSelectorExtinctFauna('répteis');
