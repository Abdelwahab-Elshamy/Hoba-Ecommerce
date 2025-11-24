import {
  FaStar,
  FaRegStarHalfStroke,
  FaCartArrowDown,
  FaRegHeart,
  FaShare,
} from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../components/context/CartContext";
import { FaCheck } from "react-icons/fa";
import toast from "react-hot-toast";

export default function Product({ item }) {
  const navigate = useNavigate();
  const stars = [];
  const fullStars = Math.floor(item.rating || 0);
  const hasHalf = (item.rating || 0) % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={`star-${i}`} className="star-icon" />);
  }
  if (hasHalf) {
    stars.push(<FaRegStarHalfStroke key="star-half" className="star-icon" />);
  }

  const { cart, addToCart, favorites, addToFavorites, removeFromFavorites } =
    useContext(CartContext);

  const isInCart = cart.some((cartItem) => cartItem.id === item.id);
  const handelAddToCart = () => {
    addToCart(item);

    toast.success(
      <div className="toast-wrapper">
        <img src={item.images[0]} alt="" className="toast-img" />
        <div className="toast-content">
          <strong>{item.title}</strong>
          added to cart
        </div>
        <div>
          <button onClick={() => navigate("/cart")} className="btn">
            {" "}
            view cart{" "}
          </button>
        </div>
      </div>,
      { duration: 3500 }
    );
  };
  //favorites
  const isInFav = favorites.some((i) => i.id === item.id);

  const handelAddToFav = () => {
    if (isInFav) {
      removeFromFavorites(item.id);
      toast.error(`${item.title} Removed from favorites`);
    } else {
      addToFavorites(item);
      toast.success(`${item.title} added To favorites`);
    }
  };
  return (
    <div className={`product ${isInCart ? "in-cart" : ""} `}>
      <Link to={`/products/${item.id}`}>
        <span className="status-cart">
          <FaCheck /> in cart{" "}
        </span>
        <div className="img-product">
          <img src={item.images[0]} alt="" />
        </div>
        <p className="name-product">{item.title}</p>
        <div className="stars">{stars}</div>

        <p className="price">
          <span>{`$${item.price}`}</span>
        </p>
      </Link>
      <div className="icons">
        <span className="btn-addtocart" onClick={handelAddToCart}>
          <FaCartArrowDown />
        </span>
        <span className={`${isInFav ? "in-fav" : ""}`} onClick={handelAddToFav}>
          <FaRegHeart />
        </span>
        <span>
          <FaShare />
        </span>
      </div>
    </div>
  );
}
