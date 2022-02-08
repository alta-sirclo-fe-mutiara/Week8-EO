import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { InputEvents } from "../../types/type";
import { Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import InputForm from "../UI/Input/InputForm";
import styles from "../../styles/color.module.css";
import { QUERY_GET_CATEGORY } from "../../utils/queries";
import { useQuery } from "@apollo/client";

interface FormInputs {
	addType: boolean;
	handleSubmit?: any;
	onSubmit?: any;
	register?: any;
	errors?: any;
	control?: any;
	defaultValues: any;
}
const FormInput: React.FC<FormInputs> = ({
	addType,
	handleSubmit,
	onSubmit,
	register,
	defaultValues,
	control,
	errors,
}) => {
	const [isCategories, setIsCategories] = useState([]);
	const { data } = useQuery(QUERY_GET_CATEGORY);

	const [values, setValues] = useState<InputEvents>({
		name: "",
		promotor: "",
		categoryId: 0,
		datetime: "",
		location: "",
		photo: "",
		description: "",
	});
	const { name, promotor, categoryId, datetime, location, photo, description } =
		values;

	useEffect(() => {
		if (data) {
			setIsCategories(data.categories);
		}

		if (defaultValues) {
			const {
				name,
				promotor,
				categoryId,
				datetime,
				location,
				photo,
				description,
			} = defaultValues;
			setValues({
				name,
				promotor,
				categoryId,
				datetime,
				location,
				photo,
				description,
			});
		}
	}, [
		data,
		setValues,
		name,
		promotor,
		categoryId,
		datetime,
		location,
		photo,
		description,
		defaultValues,
	]);

	return (
		<>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<InputForm
					className="mb-3"
					label="Event Name"
					placeholder="add event name"
					defaultValue={addType ? "" : name}
					errors={errors.name}
					{...register("name", {
						required: true,
					})}
				/>

				<div className="row">
					<InputForm
						className="mb-3 col"
						label="Promotor"
						placeholder="add promotor"
						defaultValue={addType ? "" : promotor}
						errors={errors.promotor}
						{...register("promotor", {
							required: true,
						})}
					/>
					<Form.Group className="mb-3 col">
						<Form.Label>Category</Form.Label>
						<Form.Select
							style={{
								backgroundColor: "#F3F3F3",
							}}
							defaultValue={addType ? "" : categoryId}
							errors={errors.categoryId}
							{...register("categoryId", {
								required: true,
							})}
						>
							{isCategories.map((categories: any, i: number) => (
								<option key={i} value={categories.id}>
									{categories.category}
								</option>
							))}
						</Form.Select>
					</Form.Group>
				</div>
				<div className="row">
					<Form.Group className="mb-3 col">
						<Form.Label>Date</Form.Label>
						<Controller
							name="datetime"
							control={control}
							render={({ field }): any => (
								<DatePicker
									placeholderText="Select date"
									className={`${styles.input} form-control`}
									onChange={(datetime) => field.onChange(datetime)}
									selected={field.value}
								/>
							)}
						/>

						{errors.date && <p>Please fill or change the value</p>}
					</Form.Group>
					<InputForm
						className="mb-3 col"
						label="Location"
						placeholder="add location"
						defaultValue={addType ? "" : location}
						errors={errors.location}
						{...register("location", {
							required: true,
						})}
					/>
				</div>
				<InputForm
					className="mb-3"
					label="Photo"
					placeholder="add event photo"
					defaultValue={addType ? "" : photo}
					errors={errors.photo}
					{...register("photo", {
						required: true,
					})}
				/>
				<Form.Group className="mb-3">
					<Form.Label>Description</Form.Label>
					<Form.Control
						as="textarea"
						className={styles.input}
						placeholder="add description of event"
						defaultValue={addType ? "" : description}
						{...register("description", {
							required: true,
						})}
						style={{ height: "25vh" }}
					/>
				</Form.Group>
				<div className="py-2 d-flex flex-column justify-content-center gap-4 mt-4">
					<Button type="submit" variant="success">
						{addType ? "Submit" : "Update Events"}
					</Button>
				</div>
			</Form>
		</>
	);
};

export default FormInput;
