import { Formik, Form, FormikState } from "formik";
import * as Yup from "yup";
import TextInput from "./TextInput";

import styles from "./ContactForm.module.css";

interface Values {
	name: string;
	email: string;
	subject: string;
	message: string;
}

export default function ContactForm(): JSX.Element {
	async function handleSubmit(
		values: Values,
		setSubmitting: (isSubmitting: boolean) => void,
		resetForm: (nextState?: Partial<FormikState<Values>>) => void
	) {
		const res = await fetch("/api/contact", {
			method: "POST",
			headers: {
				Accept: "application/json, text/plain",
				"Content-Type": "application/json"
			},
			body: JSON.stringify(values)
		});

		if (res.status === 200) {
			setSubmitting(false);
			resetForm();
		}
	}

	return (
		<section className={styles.container}>
			<h2>Contact Me</h2>
			<Formik
				initialValues={{
					name: "",
					email: "",
					subject: "",
					message: ""
				}}
				validationSchema={Yup.object({
					name: Yup.string()
						.min(2, "Name field must contain at least 2 letters.")
						.max(25, "Name field can't contain more than 25 characters.")
						.matches(/^[a-zA-z\s]*$/, "No numbers or symbols, please."),
					email: Yup.string().email("Invalid email address."),
					subject: Yup.string().max(
						30,
						"Subject field can't contain more than 30 characters."
					),
					message: Yup.string().required("Required field.")
				})}
				onSubmit={(values, { setSubmitting, resetForm }) =>
					handleSubmit(values, setSubmitting, resetForm)
				}
			>
				{props => (
					<>
						<Form>
							<TextInput
								label="Name"
								type="text"
								name="name"
								id="name"
								placeholder="Jane Doe"
							/>

							<TextInput
								label="Email"
								type="email"
								name="email"
								id="email"
								placeholder="example@email.com"
							/>

							<TextInput
								label="Subject"
								type="text"
								name="subject"
								id="subject"
								placeholder="Let's talk about..."
							/>

							<TextInput
								label="Message*"
								name="message"
								id="message"
								placeholder="Hi Rafael! I'd like to talk to you about..."
								rows={4}
								textarea
							/>

							<button type="submit">
								{props.isSubmitting ? "Sending..." : "Send message"}
							</button>
						</Form>
					</>
				)}
			</Formik>
		</section>
	);
}
