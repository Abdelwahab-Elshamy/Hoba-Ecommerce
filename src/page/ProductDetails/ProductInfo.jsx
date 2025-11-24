import { useContext } from "react";
import toast from "react-hot-toast";
import { FaRegHeart, FaShare } from "react-icons/fa6";
import { TfiShoppingCart } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../components/context/CartContext";
function ProductInfo({ product, stars }) {
  const { cart, addToCart, addToFavorites, favorites, removeFromFavorites } =
    useContext(CartContext);
  const navigate = useNavigate();
  const isInCart = cart.some((cartItem) => cartItem.id === product.id);

  const handelAddToCart = () => {
    addToCart(product);

    toast.success(
      <div className="toast-wrapper">
        <img src={product.images[0]} alt="" className="toast-img" />
        <div className="toast-content">
          <strong>{product.title}</strong>
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
  const isInFav = favorites.some((i) => i.id === product.id);

  const handelAddToFav = () => {
    if (isInFav) {
      removeFromFavorites(product.id);
      toast.error(`${product.title} Removed from favorites`);
    } else {
      addToFavorites(product);
      toast.success(`${product.title} added To favorites`);
    }
  };

  return (
    <>
      <div className="details-item ">
        <h1 className="name">{product.title}</h1>
        <div className="stars">{stars}</div>
        <div className="price">${product.price}</div>
        <h5>
          Availability: <span>{product.availabilityStatus}</span>
        </h5>
        <h5>
          Brand: <span>{product.brand}</span>
        </h5>
        <p className="desc">{product.description}</p>
        <h5 className="stock">
          <span>Hurry Up! Only {product.stock} products left in stock</span>
        </h5>

        <button
          onClick={handelAddToCart}
          className={`btn-add-cart ${isInCart ? "in-cart" : ""} `}
        >
          {isInCart ? "item in cart" : "Add to Cart"} <TfiShoppingCart />
        </button>

        <div className="icons">
          <span
            className={`${isInFav ? "in-fav" : ""}`}
            onClick={handelAddToFav}
          >
            <FaRegHeart />
          </span>
          <span>
            <FaShare />
          </span>
        </div>
      </div>
    </>
  );
}

export default ProductInfo;
