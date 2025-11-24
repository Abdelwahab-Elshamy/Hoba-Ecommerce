import { MdOutlineArrowDropDown } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "./header.css";
const NavLinks = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  { title: "Accessories", link: "/accessories" },
  { title: "Contact", link: "/contact" },
];

export default function Bottomheader() {
  const location = useLocation();
  const [categories, setCategories] = useState([]);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isNavBar, setIsNavBar] = useState(false);

  useEffect(() => {
    setIsCategoryOpen(false);
  }, [location]);
  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error happened:", error));
  }, []);

  return (
    <div className="btn-header">
      <div className="container">
        <nav className="nav">
          <IoMdMenu className="menu" onClick={() => setIsNavBar(!isNavBar)} />

          <div className={`nav-links ${isNavBar ? "mobile-open" : ""}`}>
            {NavLinks.map((items, index) => (
              <li
                className={location.pathname === items.link ? "active" : ""}
                key={index}
              >
                <Link
                  to={items.link}
                  key={index}
                  onClick={() => setIsNavBar(false)}
                >
                  {items.title}
                </Link>
              </li>
            ))}
          </div>
          <div className="category-nav">
            <div
              className="category-btn"
              onClick={() => setIsCategoryOpen(!isCategoryOpen)}
            >
              <p>Browse Category</p>
              <MdOutlineArrowDropDown />
            </div>
            <div
              className={`category-nav-list ${isCategoryOpen ? "active" : ""}`}
            >
              {categories.map((categorey, index) => (
                <Link to={`category/${categorey.slug}`} key={index}>
                  {categorey.name}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
