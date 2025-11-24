import React, { useContext } from "react";
import { CartContext } from "../../components/context/CartContext";
import { FaTrashAlt } from "react-icons/fa";
import "./cart.css";
import PageTransition from "../../components/PageTransition";
export default function cart() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { cart, removeFromCart, addToCart, decreaseQuantity } =
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useContext(CartContext);
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return (
    <PageTransition>
      <div className="checkout">
        <div className="ordersummary">
          <h1>Order Summary</h1>
          <div className="items">
            {cart.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              cart.map((item, index) => (
                <div className="item-cart" key={index}>
                  <div className="image-name">
                    <div className="img-item">
                      <img src={item.images[0]} alt="" />
                    </div>
                    <div className="content">
                      <h4>{item.title}</h4>
                      <p className="price-item"> ${item.price} </p>
                      <div className="quantity-control">
                        <button onClick={() => decreaseQuantity(item)}>
                          -
                        </button>
                        <span className="quantity">{item.quantity}</span>
                        <button onClick={() => addToCart(item)}>+</button>
                      </div>
                    </div>{" "}
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="delete-item"
                  >
                    <FaTrashAlt />
                  </button>
                </div>
              ))
            )}
          </div>

          <div className="bottom-summary">
            <div className="shop-table">
              <span className="total-checkout">${totalPrice.toFixed(2)} </span>
            </div>
            <div className="button-div">
              <button type="sumbit">Place Order</button>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
