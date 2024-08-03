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
import Fifth from "./pages/educationReact/fifth";
import Sixth from "./pages/educationReact/sixth";
import Rps from "./pages/rockPaperScissor/rps";
import Todo from "./pages/to-do/toDo";
function App() {
  const urlData = [
    { name: "Home", href: "/", id: 1 },
    { name: "PureHtmlForm", href: "/PureHtmlForm", id: 2 },
    { name: "ReactHookForm", href: "/ReactHookForm", id: 3 },
    { name: "RandomCard", href: "/RandomCard", id: 4 },
    { name: "Validator", href: "/Validator", id: 5 },
    { name: "RockPaperScissor", href: "/RockPaperScissor", id: 6 },
    { name: "Todo", href: "/Todo", id: 7 },
    { name: "Lessons", href: "/Lessons", id: 8 },
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
        <Route path="/RockPaperScissor" element={<Rps />} />
        <Route path="/Todo" element={<Todo />} />
        <Route path="/Lessons" element={<Lessons />}>
          <Route path="UseMemo" element={<First />} />
          <Route path="UseCallback" element={<Second />} />
          <Route path="ContextApi" element={<Third />} />
          <Route path="İPfinder" element={<Fourth />} />
          <Route path="RealTimeColors" element={<Fifth />} />
          <Route path="Localization" element={<Sixth />} />
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
