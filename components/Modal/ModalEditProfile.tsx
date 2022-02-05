import { ChangeEvent, FormEvent, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

type Props = {
	showLog: boolean;
	onSetLog: (arg: boolean) => void;
	onSetReg: (arg: boolean) => void;
};

type Inputs = {
	name: string;
	email: string;
	phone: string;
	address: string;
	password?: string;
	id?: number;
};

const ModalEditProfile: React.FC<Props> = ({ showLog, onSetLog }) => {
	const [isSucces, setIsSucces] = useState<boolean>(false);
	const [isFailed, setIsFailed] = useState<boolean>(false);
	const [data, setData] = useState({});
	const {
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [phone, setPhone] = useState("");

	const onSubmit = async (e: any) => {
		e.preventDefault();
		console.log(e);
		// Send data to back end with graphql
		setIsSucces(true);
		setTimeout(() => {
			setIsSucces(false);
			setIsFailed(true);
		}, 1000);
	};

	return (
		<Modal
			show={showLog}
			onHide={() => onSetLog(false)}
			backdrop="static"
			keyboard={false}
			centered
		>
			<Modal.Header className="border-0 text-center" closeButton>
				<Modal.Title className="w-100 dark-grey-text font-weight-bold">
					Edit Profile
				</Modal.Title>
			</Modal.Header>
			<Modal.Body className="py-3 mx-2">
				<Form onSubmit={handleSubmit(onSubmit)}>
					{isSucces && <div className="btn btn-success w-100">Succes</div>}
					{isFailed && <div className="btn btn-danger w-100">Failed</div>}
					<Form.Group className="mb-3">
						<Form.Label>Name</Form.Label>
						<Form.Control
							type="text"
							onChange={(e: any) => setName(e.target.value)}
							value={name}
						/>
						{errors.name && (
							<span className="text-danger">This field is required</span>
						)}
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label>Email</Form.Label>
						<Form.Control
							type="email"
							onChange={(e: any) => setEmail(e.target.value)}
							value={email}
						/>
						{errors.email && (
							<span className="text-danger">This field is required</span>
						)}
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control
							type="password"
							onChange={(e: any) => setPassword(e.target.value)}
							value={password}
						/>
						{errors.password && (
							<span className="text-danger">This field is required</span>
						)}
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label>Phone</Form.Label>
						<Form.Control
							type="text"
							onChange={(e: any) => setPhone(e.target.value)}
							value={phone}
						/>
						{errors.phone && (
							<span className="text-danger">This field is required</span>
						)}
					</Form.Group>
					<div className="py-2 d-flex flex-column justify-content-center gap-4 mt-4">
						<Button type="submit" variant="primary" className="">
							Update Profile
						</Button>
					</div>
				</Form>
			</Modal.Body>
		</Modal>
	);
};

export default ModalEditProfile;
