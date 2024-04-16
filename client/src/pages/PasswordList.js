import React, { useEffect, useState } from "react";
import Axios from 'axios';

export default function PasswordList() {

  const [passwordList, setPasswordList] = useState([]);

  // get all passwords upon loading page
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

    // function used to decrypt passwords saved with security in the database - before displaying
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
    <ul>
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
  </ul>
  );
}