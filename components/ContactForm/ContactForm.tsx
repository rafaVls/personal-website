import { FormEvent, useState } from "react";

import styles from "./ContactForm.module.css";

export default function ContactForm(): JSX.Element {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");

	async function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();

		let data = {
			name,
			email,
			subject,
			message
		};

		const res = await fetch("/api/contact", {
			method: "POST",
			headers: {
				Accept: "application/json, text/plain",
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		});

		if (res.status === 200) {
			setName("");
			setEmail("");
			setSubject("");
			setMessage("");
		}
	}

	return (
		<section className={styles.container}>
			<h2>Contact Me</h2>

			<form onSubmit={e => handleSubmit(e)}>
				<label htmlFor="name">Name</label>
				<input
					type="text"
					name="name"
					id="name"
					placeholder="Jane Doe"
					value={name}
					pattern="[A-Za-z]+"
					onChange={e => setName(e.target.value)}
				/>

				<label htmlFor="email">Email</label>
				<input
					type="email"
					name="email"
					id="email"
					placeholder="example@email.com"
					title="This is so I can reply to you. I do not store or sell your information anywhere."
					value={email}
					onChange={e => setEmail(e.target.value)}
				/>

				<label htmlFor="subject">Subject</label>
				<input
					type="text"
					name="subject"
					id="subject"
					placeholder="Let's talk about..."
					value={subject}
					pattern="[A-Za-z0-9]+$"
					onChange={e => setSubject(e.target.value)}
					required
				/>

				<label htmlFor="message">Message</label>
				<textarea
					name="message"
					id="message"
					placeholder="Hi Rafael! Just wanted to talk to you about..."
					value={message}
					rows={4}
					onChange={e => setMessage(e.target.value)}
					required
				/>

				<button>Send email</button>
			</form>
		</section>
	);
}
