import { Button, Card, CardBody, CardFooter, CircularProgress } from '@nextui-org/react';
import ParamModal from './ParamModal';

const variants = ['danger', 'warning', 'secondary', 'primary'];

export const DataDisplay = ({ props }) => {
	const { id, name, unit, value, min, max } = props;
		const simValue = name === 'Water tank' ? 10 : Math.floor(Math.random() * (Number(max) - Number(min)) + Number(min));
	console.log({ min, max, simValue });
	return (
		<Card className="w-[25em] h-[30em] self-center justify-self-center ">
			<CardBody className="justify-center items-center">
				<h3 className="font-semibold text-3xl mb-7"> {name} </h3>
				<CircularProgress
					classNames={{
						svg: 'w-[15em] h-[15em] drop-shadow-md',
						track: 'stroke-white/10',
						value: 'text-4xl font-semibold text-white',
					}}
					formatOptions={{ style: 'unit', unit: unit }}
					color={variants[id]}
					value={simValue }
					strokeWidth={4}
					showValueLabel={true}
				/>
			</CardBody>
			<CardFooter className="w-[100%] justify-center">
				<ParamModal props={props} />
			</CardFooter>
		</Card>
	);
};
