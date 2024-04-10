// Style Import
import "./App.css"

// App.js
import React, { useState, useEffect } from "react";
import Axios from 'axios';

const App = () => {

	const [password, setPassword] = useState("");
	const [title, setTitle] = useState("");
	const [passwordList, setPasswordList] = useState([]);

	useEffect(() => {
		Axios.get('http://localhost:3001/showpasswords')
		.then( (response) => {
			console.log(response.data.rows);
			setPasswordList(response.data.rows);
		})
		.catch((error) => {
			if (error.reponse) {
			console.log(error.response.data)
			}
		})
		}, []);

		const addPassword = () => {
			if (password && title) {
				Axios.post('http://localhost:3001/addpassword', {
					password: password,
					title: title
				})
					.then((response) => {
						console.log('Password added:', { password, title });
						setPassword('');
						setTitle('');
						console.log("It worked!!");
					})
					.catch((error) => {
						if (error.response) {
							console.log(error.response.data);
						}
					});
			} else {
				alert('Please fill out both password and title.');
			}
		};

	const decryptPassword = (encryption) => {
		Axios.post('http://localhost:3001/decryptpassword', {
			password: encryption.password,
			iv: encryption.iv
		})
		.then((response) => {
			setPasswordList(passwordList.map((val) => {
				return val.id === encryption.id
				? {
					id: val.id,
					password: val.password,
					title: response.data,
					iv: val.id
				} : val;
		})
		)
		});
	};

	return (
		<div className="App"> 
			<div className="AddingPass">
				<input 
				type="text" 
				placeholder="Ex: password123"
				required
				onChange={(event)=> {
					setPassword(event.target.value);
					console.log(password);
				}}>
				</input>

				<input 
				type="text" 
				placeholder="Ex: Facebook"
				required
				onChange={(event)=> {
					setTitle(event.target.value);
					console.log(title);
				}}
				>
				</input>
				<button onClick={addPassword}>Add Password</button>
			</div>

			<div className="Passwords">
				{passwordList.map((val, key) => {
					return (<div className="Password"
					onClick={
						() => {
							decryptPassword({
								password: val.password,
								iv: val.iv,
								id: val.id
							})
						}}
						key={key}
						>
					<h3>{val.title}</h3>
					</div>
				)
				})}
			</div>
		</div>
	)
};

export default App;

