import React, { useState } from "react";
import validator from "validator";

const Validator = () => {
  const [value, setValue] = useState("");
  const [message, setMessage] = useState(null);

  const validate = (input) => {
    if (
      validator.isStrongPassword(input, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setMessage(true);
    } else {
      setMessage(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (message) {
      console.log("Valid password");
    } else {
      console.log("This is not a valid password");
    }
  };
  // bu validatörü react hook form veya pure html form ile kollanmak için araştırma yap
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Validator</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="password"
            onChange={(e) => {
              setValue(e.target.value);
              validate(e.target.value);
            }}
          />
          {message !== null && (
            <span style={{ color: message ? "green" : "red" }}>
              {message ? "strong password" : "this is not a strong password"}
            </span>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Validator;
