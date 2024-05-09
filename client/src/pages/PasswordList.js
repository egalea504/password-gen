import React, { useEffect, useState } from "react";
import Axios from 'axios';

export default function PasswordList() {
  // State to hold the list of passwords
  const [passwordList, setPasswordList] = useState([]);

  // Fetch all passwords when the component is mounted
  useEffect(() => {
    Axios.get('http://localhost:3001/showpasswords')
      .then((response) => {
        setPasswordList(
          response.data.rows.map((item) => ({
            ...item,
            isDecrypted: false, // Initial state for decryption
            originalTitle: item.title, // Keep the original website name
          }))
        );
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data);
        }
      });
  }, []); // Empty dependency array means this effect runs once on mount

  // Function to toggle decryption
  const toggleDecryption = (id, encryptedPassword, iv) => {
    const targetItem = passwordList.find((item) => item.id === id);

    if (targetItem.isDecrypted) {
      // If already decrypted, revert to the original website name
      setPasswordList((prevList) =>
        prevList.map((item) =>
          item.id === id
            ? {
                ...item,
                title: item.originalTitle, // Revert to original name
                isDecrypted: false, // Toggle off decryption
              }
            : item
        )
      );
    } else {
      // If not decrypted, decrypt it
      Axios.post('http://localhost:3001/decryptpassword', {
        password: encryptedPassword,
        iv,
      }).then((response) => {
        setPasswordList((prevList) =>
          prevList.map((item) =>
            item.id === id
              ? {
                  ...item,
                  title: response.data, // Set decrypted password
                  isDecrypted: true, // Toggle on decryption
                }
              : item
          )
        );
      });
    }
  };

  return (
    <ul>
      <div className="Passwords">
        {passwordList.map((item) => (
          <div
            className="Password"
            onClick={() =>
              toggleDecryption(item.id, item.password, item.iv)
            }
            key={item.id}
          >
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </ul>
  );
}
