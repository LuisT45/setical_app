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
		return <DataDisplay key={card.id} props={card} />;
	});

	return (
		<>
			{info && (
				<div className="flex flex-wrap gap-10 mt-10 justify-center items-center" >
					{dataCards}
				</div>
			)}
		</>
	);
};

export default DataRow;
