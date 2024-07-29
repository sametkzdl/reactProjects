import { Routes, Route, useParams, Link, useLocation } from "react-router-dom";
import PureHtmlForm from "./pages/forms/purehtmlform";
import ReactHookForm from "./pages/forms/reactHookForm";
import Home from "./pages/home";
import RandomCard from "./pages/randomCard/jokes";

function App() {
  const location = useLocation();
  const urlData = [
    { name: "Home", href: "/" },
    { name: "PureHtmlForm", href: "/PureHtmlForm" },
    { name: "ReactHookForm", href: "/ReactHookForm" },
    { name: "RandomCard", href: "/RandomCard" },
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
        <Route path="/" element={<Home />} />
        <Route path="/PureHtmlForm" element={<PureHtmlForm />} />
        <Route path="/ReactHookForm" element={<ReactHookForm />} />
        <Route path="/RandomCard" element={<RandomCard />} />
      </Routes>
    </div>
  );
}

export default App;
