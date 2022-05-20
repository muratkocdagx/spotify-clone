import React from "react";
import { Icon } from "Icons";

import { NavLink } from "react-router-dom";

function Menu() {
  let inActiveClassName = "h-10 flex gap-x-4 items-center text-sm font-semibold text-link hover:text-white rounded px-4";
  let activeClassName = "h-10 flex gap-x-4 items-center text-sm font-semibold text-white bg-active text-link rounded px-4";

  return (
    <nav className="px-2">
      <ul className="flex flex-col">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? activeClassName : inActiveClassName
            }
          >
            <span>
              <Icon name="home" size="24" />
            </span>
            Anasayfa
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/search"
            className={({ isActive }) =>
              isActive ? activeClassName : inActiveClassName
            }
          >
            <span>
              <Icon name="search" size="24" />
            </span>
            Ara
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/collection"
            className={({ isActive }) =>
              isActive ? activeClassName : inActiveClassName
            }
          >
            <span>
              <Icon name="library" size="24" />
            </span>
            Kitaplığın
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
