import React from "react";

const Header = ({ dark, children, className, items }) => {
  dark = !!dark ? "dark" : "light";
  return (
    <nav
      className={
        `Header navbar navbar-${dark} bg-${dark}` +
        (className ? " " + className : "") +
        (items && items.length ? " navbar-expand-lg" : "")
      }
    >
      <span className="navbar-brand">{children}</span>
      {items && items.length > 0 && (
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            {items.map((item, key) => (
              <li className="nav-item" key={key}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;
