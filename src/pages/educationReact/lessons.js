import { Outlet, NavLink } from "react-router-dom";
import React from "react";
const Lessons = () => {
  const urlData = [
    { name: "UseMemo", href: "/First", id: 1 },
    { name: "UseCallback", href: "/Second", id: 2 },
    { name: "ContextApi", href: "/Third", id: 3 },
    { name: "İPfinder", href: "/Fourth", id: 4 },
    { name: "RealTimeColors", href: "/Fifth", id: 5 },

  ];
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Lessons</h2>
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          borderBottom: "1px solid gray",
          padding: "20px",
        }}
      >
        {urlData.map(({ name }, index) => {
          return (
            <li key={index}>
              <NavLink
                style={({ isActive, isPending, isTransitioning }) => {
                  return {
                    display: "block",
                    border: isActive ? "2px solid red" : "none",
                    padding: isActive ? "10px" : "5px",
                    color: isPending ? "red" : "black",
                    viewTransitionName: isTransitioning ? "slide" : "",
                    width: "150px",
                    textDecoration: "none",
                  };
                }}
                to={`${name}`}
              >
                {name}
              </NavLink>
            </li>
          );
        })}
      </ul>

      <Outlet />
    </div>
  );
};

export default Lessons;
