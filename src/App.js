import { Routes, Route, Link, useLocation } from "react-router-dom";
import React from "react";
import PureHtmlForm from "./pages/forms/purehtmlform";
import ReactHookForm from "./pages/forms/reactHookForm";
import Home from "./pages/home";
import RandomCard from "./pages/randomCard/jokes";
import Validator from "./pages/validator/validator";
function App() {
  const location = useLocation();
  let components = { Home, PureHtmlForm, ReactHookForm, RandomCard, Validator };

  const urlData = [
    { name: "Home", href: "/", id: 1 },
    { name: "PureHtmlForm", href: "/PureHtmlForm", id: 2 },
    { name: "ReactHookForm", href: "/ReactHookForm", id: 3 },
    { name: "RandomCard", href: "/RandomCard", id: 4 },
    { name: "Validator", href: "/Validator", id: 5 },
  ];
  return (
    <div className="App">
      <header>
        <ul
          style={{
            padding: "20px",
            display: "flex",
            flexWrap: "wrap",
            gap: "30px",
            listStyle: "none",
            boxShadow: "5px 5px  5px #eeeddd",
            boxSizing: "border-box",
          }}
        >
          {urlData.map(({ name, href }, index) => {
            return (
              <li key={index}>
                {location.pathname === href ? (
                  <Link
                    to={href}
                    style={{
                      textDecoration: "none",
                      border: "3px solid red",
                      padding: "7px",
                      borderRadius: "5px",
                      height: "50px",
                    }}
                  >
                    {name}
                  </Link>
                ) : (
                  <Link
                    to={href}
                    style={{
                      textDecoration: "none",
                      border: "1px solid #eeeddd",
                      padding: "7px",
                      borderRadius: "5px",
                      height: "50px",
                    }}
                  >
                    {name}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </header>
      <Routes>
        {urlData.map(({ name, href, id }) => {
          const Page = components[name];
          return (
            <Route key={id} path={href} element={React.createElement(Page)} />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
