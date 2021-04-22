import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [signedUp, setSigned] = useState(window.localStorage.getItem("signed"));

  return (
    <footer>
      {signedUp ? (
        <p>lmao</p>
      ) : (
        <>
          <label htmlFor="email">Signup for our newsletter:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                window.localStorage.setItem("signed", email);
                setSigned(true);
              }
            }}
          />
        </>
      )}
    </footer>
  );
};

export default Footer;
