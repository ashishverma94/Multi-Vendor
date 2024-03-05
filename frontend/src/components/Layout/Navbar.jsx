import React from "react";
import styles from "../../styles/style";
import { Link } from "react-router-dom";
import { navItems } from "../../static/data";

const Navbar = ({ activeHeading }) => {
  return (
    <div className={`${styles.normalFlex}`}>
      {navItems &&
        navItems.map((i, index) => {
          return (
            <div key={index} className="flex">
              <Link
                to={i.url}
                className={`${
                  activeHeading === index + 1
                    ? "text-[#17dd1f]"
                    : "text-[#fff] font-[500] px-6 cursor-pointer"
                }`}
              >
                {i.title}
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default Navbar;
