// Style Import
import "./App.css"

// App.js
import React, { useState } from "react";
import Axios from 'axios';

const App = () => {

	const [password, setPassword] = useState("");
	const [title, setTitle] = useState("");

	const addPassword = () => {
		Axios.post('http://localhost:3001/addpassword', {
			password: password, 
			title: title}, console.log("It worked!!"))
			.catch((error) => {
				if (error.reponse) {
					console.log(error.response.data)
				}
			})
	}

	return (
		<div className="App"> 
			<div className="AddingPass">
				<input 
				type="text" 
				placeholder="Ex: password123"
				onChange={(event)=> {
					setPassword(event.target.value);
					console.log(password);
				}}>
				</input>

				<input 
				type="text" 
				placeholder="Ex: Facebook"
				onChange={(event)=> {
					setTitle(event.target.value);
					console.log(title);
				}}
				>
				</input>
				<button onClick={addPassword}>Add Password</button>
			</div>
		</div>
	)
};

export default App;

