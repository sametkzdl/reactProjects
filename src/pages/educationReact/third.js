import { useState } from "react";
import { useThemeContext } from "./context/themeContext";
import { useUserContext } from "./context/user.Context";

const Third = () => {
  const { bgColor, setBgColor } = useThemeContext();
  const { user, setUser } = useUserContext();
  const [values, setValues] = useState({ name: "" });
  console.log(user);
  const login = () => {
    setUser(values);
  };
  const logout = () => {
    setValues({ name: "" });
    setUser({});
  };
  return (
    <div style={{ backgroundColor: bgColor }}>
      <h2 style={{ color: bgColor === "black" ? "white" : "black" }}>
        ContextApi React
      </h2>
      <button
        onClick={() => setBgColor(bgColor === "white" ? "black" : "white")}
      >
        Change Background Theme Color
      </button>
      <br />
      <br />
      <br />
      <div>
        <input
          placeholder="name"
          onChange={(e) => setValues({ name: e.target.value })}
          value={values.name}
        />
      </div>
      <br />
      <br />
      {user.name ? (
        <button onClick={logout}>Log Out</button>
      ) : (
        <button onClick={login}>Log In</button>
      )}
    </div>
  );
};

export default Third;
