import React, { useContext } from "react";
import PageTransition from "../../components/PageTransition";
import { CartContext } from "../../components/context/CartContext";
import Product from "../../components/slideProducts/Product";
function Favorites() {
  const { favorites } = useContext(CartContext);

  return (
    <PageTransition>
      <div className="category-products FavoritesPage">
        <div className="container">
          <div className="top-slide">
            <h2> Your favorites </h2>
          </div>
          {favorites.length === 0 ? (
            <p>No Favorites Products yet.</p>
          ) : (
            <div className="products">
              {favorites.map((item) => (
                <Product item={item} key={item.id} />
              ))}
            </div>
          )}
        </div>
      </div>
    </PageTransition>
  );
}

export default Favorites;
