import { Routes, Route, NavLink } from "react-router-dom";
import React from "react";
import PureHtmlForm from "./pages/forms/purehtmlform";
import ReactHookForm from "./pages/forms/reactHookForm";
import Home from "./pages/home";
import RandomCard from "./pages/randomCard/jokes";
import Validator from "./pages/validator/validator";
import Lessons from "./pages/educationReact/lessons";
import First from "./pages/educationReact/first";
import Second from "./pages/educationReact/second";
import Third from "./pages/educationReact/third";
import Fourth from "./pages/educationReact/fourth";
function App() {
  const urlData = [
    { name: "Home", href: "/", id: 1 },
    { name: "PureHtmlForm", href: "/PureHtmlForm", id: 2 },
    { name: "ReactHookForm", href: "/ReactHookForm", id: 3 },
    { name: "RandomCard", href: "/RandomCard", id: 4 },
    { name: "Validator", href: "/Validator", id: 5 },
    { name: "Lessons", href: "/Lessons", id: 6 },
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
          {urlData.map(({ name, href, id }) => {
            return (
              <NavLink
                style={({ isActive, isPending, isTransitioning }) => {
                  return {
                    border: isActive ? "2px solid red" : "none",
                    padding: isActive ? "5px" : "none",
                    color: isPending ? "red" : "black",
                    viewTransitionName: isTransitioning ? "slide" : "",
                  };
                }}
                key={id}
                to={href}
              >
                {name === "Lesson" ? null : name}
              </NavLink>
            );
          })}
        </ul>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PureHtmlForm" element={<PureHtmlForm />} />
        <Route path="/ReactHookForm" element={<ReactHookForm />} />
        <Route path="/RandomCard" element={<RandomCard />} />
        <Route path="/Validator" element={<Validator />} />
        <Route path="/Validator" element={<Validator />} />
        <Route path="/Lessons" element={<Lessons />}>
          <Route path="First" element={<First />} />
          <Route path="Second" element={<Second />} />
          <Route path="Third" element={<Third />} />
          <Route path="Fourth" element={<Fourth />} />
        </Route>
        <Route path={"*"} element={<Error />} />
      </Routes>
    </div>
  );
}

export function Error() {
  return (
    <div>
      <h2>This Page İs Not Found</h2>
    </div>
  );
}

export default App;
