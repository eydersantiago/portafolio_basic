import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { navLinks } from "../constants/index.js";

const NavItems = ({ onClick = () => {} }) => {
  const { t, i18n } = useTranslation();
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    setOpenDropdown(null); // Cierra el dropdown después de seleccionar
    if (onClick) onClick(); // Cierra el sidebar si es necesario
  };

  return (
    <ul className="nav-ul">
      {navLinks.map((item) => (
        <li key={item.id} className="nav-li">
          {/* Si el elemento tiene hijos (es un dropdown) */}
          {item.children ? (
            <>
              <button
                onClick={() => toggleDropdown(item.id)}
                className="nav-li_a flex items-center justify-between"
              >
                {t(item.key === "nav.language.label" ? "nav.language.label" : item.key)}
                <svg
                  className={`ml-2 w-4 h-4 transition-transform ${
                    openDropdown === item.id ? "rotate-180" : "rotate-0"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {/* Dropdown */}
              {openDropdown === item.id && (
                <ul className="dropdown">
                  {item.children.map((child) => (
                    <li key={child.id}>
                      <button
                        onClick={() =>
                          handleLanguageChange(
                            child.key === "nav.language.es" ? "es" : "en"
                          )
                        }
                        className="dropdown-item"
                      >
                        {t(child.key)}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </>
          ) : (
            <a href={item.href} className="nav-li_a" onClick={onClick}>
              {t(item.key)}
            </a>
          )}
        </li>
      ))}
    </ul>
  );
};

export default NavItems;
