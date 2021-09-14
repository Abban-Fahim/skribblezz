import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [signedUp, setSigned] = useState(window.localStorage.getItem("signed"));

  return (
    <footer>
      {signedUp ? (
        <div
          className="container-fluid bg-success"
          style={{ padding: "20px", margin: "18px 0" }}
        >
          <h3>Thanks for signing up :)</h3>
        </div>
      ) : (
        <div
          className="text-center container-fluid"
          style={{ padding: "45px" }}
        >
          <div className="row">
            <label htmlFor="email" className="h1 col-sm-12 col-lg-4 col-md-5">
              Signup for our newsletter:
            </label>
            <div className="col-sm-12 col-lg-3 col-md-4">
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    window.localStorage.setItem("signed", email);
                    setSigned(true);
                  }
                }}
              />
            </div>
          </div>
        </div>
      )}
      <a href="https://www.instagram.com/abban_fahim/">
        <i className="bi bi-instagram"></i>
      </a>
      <a href="https://twitter.com/FahimAbban">
        <i className="bi bi-twitter"></i>
      </a>
      <a href="https://github.com/Abban-Fahim">
        <i className="bi bi-github"></i>
      </a>
    </footer>
  );
};

export default Footer;
