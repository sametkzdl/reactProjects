import { Outlet, NavLink } from "react-router-dom";
import React from "react";
const Lessons = () => {
  const urlData = [
    { name: "UseMemo", href: "/First", id: 1 },
    { name: "UseCallback", href: "/Second", id: 2 },
    { name: "ContextApi", href: "/Third", id: 3 },
    { name: "İPfinder", href: "/Fourth", id: 4 },
  ];
  return (
    <div>
      <h2>Lessons</h2>
      {urlData.map(({ name }, index) => {
        return (
          <NavLink
            style={({ isActive, isPending, isTransitioning }) => {
              return {
                display: "block",
                border: isActive ? "2px solid red" : "none",
                padding: isActive ? "5px" : "none",
                color: isPending ? "red" : "black",
                viewTransitionName: isTransitioning ? "slide" : "",
              };
            }}
            key={index}
            to={`${name}`}
          >
            {name}
          </NavLink>
        );
      })}
      <Outlet />
    </div>
  );
};

export default Lessons;
