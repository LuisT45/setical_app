import { useState, useEffect } from 'react';
import { DataDisplay } from './Card';

const DataRow = () => {
	const [info, setInfo] = useState([]);

	useEffect(() => {
		fetch('https://6504e2e9c8869921ae25834d.mockapi.io/api/v1/variables')
			.then((response) => response.json())
			.then((data) => setInfo(data));
	}, []);

	console.log(info);

	const dataCards = info.map((card) => {
		return <DataDisplay key={card.id} id={card.id} title={card.name} unit={card.unit} value={card.value} min={card.min} max={card.max} />;
	});

	return (
		<div className="grid place-content-center p-12 gap-10 md:grid-cols-[repeat(2,_auto)]">{dataCards}</div>
	);
};

export default DataRow;
