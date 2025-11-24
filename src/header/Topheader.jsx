import { useContext } from "react";
import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { TiShoppingCart } from "react-icons/ti";
import "./header.css";
import { CartContext } from "../components/context/CartContext";
import SearchBox from "./SearchBox";

export default function Topheader() {
  const { cart, favorites } = useContext(CartContext);
  return (
    <div className="top_header">
      <div className="container">
        <Link className="logo" to="/">
          {" "}
          <img src="/logo.png" alt="logo" />{" "}
        </Link>
        <SearchBox />
        <div className="header_icons">
          <div className="icon">
            <Link to="/favorites">
              <CiHeart />
              <span className="count">{favorites.length}</span>
            </Link>
          </div>
          <div className="icon">
            <Link to="/cart">
              <TiShoppingCart />
              <span className="count">{cart.length}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
