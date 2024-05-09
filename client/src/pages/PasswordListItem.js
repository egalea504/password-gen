import React from "react";

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

export default function PasswordListItem(props) {
  return (
    <li className="password" onClick={() => props.setPassword(props.title)} data-testid="password">
      <h2 className="text--regular">{props.title}</h2> 
    </li>
  );
}