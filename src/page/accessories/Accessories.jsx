// Accessories.jsx
import React, { useEffect, useState } from "react";
import PageTransition from "../../components/PageTransition";
import SlideProductlLoading from "../../components/slideProducts/SlideProductlLoading";
import Product from "../../components/slideProducts/Product";

function Accessories() {
  const categories = [
    "sports-accessories",
    "kitchen-accessories",
    "mobile-accessories",
  ];
  const [allProducts, setAllProducts] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    Promise.all(
      categories.map((category) =>
        fetch(`https://dummyjson.com/products/category/${category}`)
          .then((res) => res.json())
          .then((data) => ({ category, products: data.products }))
      )
    )
      .then((results) => {
        const productsData = {};
        results.forEach((item) => {
          productsData[item.category] = item.products;
        });
        setAllProducts(productsData);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <PageTransition key="accessories">
      <div className="category-products">
        <div className="container">
          {loading ? (
            <SlideProductlLoading />
          ) : (
            categories.map((category) => (
              <div key={category} className="category-section my-5">
                <div className="top-slide">
                  <h2>{category.replace("-", " ")}</h2>
                </div>
                {allProducts[category] && allProducts[category].length > 0 ? (
                  <div className="products d-flex flex-wrap gap-3">
                    {allProducts[category].slice(0, 10).map((item, index) => (
                      <Product item={item} key={index} />
                    ))}
                  </div>
                ) : (
                  <p>No products available.</p>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </PageTransition>
  );
}

export default Accessories;
