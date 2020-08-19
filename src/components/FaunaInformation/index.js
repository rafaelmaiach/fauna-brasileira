import React from 'react'

function FaunaInformation({ information, reset }) {
	const rows = information.map(info => (
		<tr key={info.id}>
			<td>{info?.grupo_taxonomico || ''}</td>
			<td>{info?.classe || ''}</td>
			<td>{info?.ordem || ''}</td>
			<td>{info?.familia || ''}</td>
			<td>{info?.especie || ''}</td>
			<td>{info?.nome_comum || ''}</td>
			<td>{info?.categoria_validada || ''}</td>
			<td>{info?.criterio_validado || ''}</td>
		</tr>
	));

	return (
		<div className="container py-8 px-4 w-full">
			<button className="button" onClick={reset}>Voltar</button>
			<div className="table-container mt-8 overflow-y-scroll" style={{ maxHeight: '70vh' }}>
				<table className="table is-striped">
					<thead>
						<tr>
							<th>Grupo Taxonômico</th>
							<th>Classe</th>
							<th>Ordem</th>
							<th>Família</th>
							<th>Espécie</th>
							<th>Nome Comum</th>
							<th>Categoria Validada</th>
							<th>Critério Validado</th>
						</tr>
					</thead>
					<tbody>
						{rows}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default FaunaInformation
