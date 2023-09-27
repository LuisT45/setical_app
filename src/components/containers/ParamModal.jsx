import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Button,
	useDisclosure,
	Input,
} from '@nextui-org/react';
import { useState } from 'react';

const ParamModal = () => {
	const { id, title, variant, min, max } = props
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	
	const [error, setError] = useState();

	const submitData = async (event) => {
		const minInput = document.querySelector('#min').value;
		const maxInput = document.querySelector('#max').value;
		console.log(minInput, maxInput);

		const bodyValues = {
			min: min !== '' ? minInput : min,
			max: max !== '' ? maxInput : max,
		};

		console.log(bodyValues);

		const options = {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(bodyValues),
		};

		if (bodyValues.min > bodyValues.max) {
			setError('Please insert correct values');
		} else {
			const res = await fetch(
				`https://6504e2e9c8869921ae25834d.mockapi.io/api/v1/variables/${id}`,
				options
			);
			console.log(res);
			await window.location.reload();
		}
	};

	return (
		<>
			<Button
				className="mb-5 font-semibold text-2xl p-6"
				onPress={onOpen}
				color={variant}
				variant="light"
			>
				Edit Parameters
			</Button>
			<Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
							<ModalBody>
								<div className="flex gap-3">
									<Button disabled>{`Min: ${min}`}</Button>
									{max && <Button disabled>{`Max: ${max}`}</Button>}
								</div>
								{error && (
									<div
										id="errorDisplay"
										className={
											error &&
											' bg-red-400 text-red-800 p-3 rounded-md max-w-full box-border'
										}
									>
										{error}
									</div>
								)}
								<Input
									autoFocus
									label="Min"
									placeholder={`Min ${title}`}
									id="min"
									type="number"
									variant="bordered"
								/>
								{title != 'Water tank' && (
									<Input
										label="Max"
										placeholder={`Max ${title}`}
										id="max"
										type="number"
										variant="bordered"
									/>
								)}
							</ModalBody>
							<ModalFooter>
								<Button color="danger" variant="flat" onPress={onClose}>
									Close
								</Button>
								<Button color="primary" onClick={(event) => submitData(event)}>
									Confirm
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	);
};

export default ParamModal;
