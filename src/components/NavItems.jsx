import React from "react";
import { useTranslation } from "react-i18next";
import { navLinks } from "../constants/index.js";

const NavItems = ({ onClick = () => {} }) => {
  const { t } = useTranslation();

  return (
    <ul className="nav-ul">
      {navLinks.map((item) => (
        <li key={item.id} className="nav-li">
          <a href={item.href} className="nav-li_a" onClick={onClick}>
            {t(item.key)}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavItems;
