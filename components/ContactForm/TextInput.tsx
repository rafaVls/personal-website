import { useField } from "formik";

interface Props {
	label: string;
	type?: string;
	name: string;
	id: string;
	placeholder: string;
	textarea?: boolean;
	rows?: number;
	cols?: number;
}

export default function TextInput({ label, textarea, ...props }: Props) {
	const [field, meta] = useField(props);

	return (
		<>
			<label htmlFor={props.id || props.name}>{label}</label>
			{textarea ? (
				<textarea {...field} {...props} />
			) : (
				<input {...field} {...props} />
			)}
			{meta.touched && meta.error ? <div>{meta.error}</div> : null}
		</>
	);
}
