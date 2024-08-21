import React from "react";

export default function PasswordListItem(props) {
  return (
    <li className="password" onClick={() => props.setPassword(props.title)} data-testid="password">
      <h2 className="text--regular">{props.title}</h2> 
    </li>
  );
}