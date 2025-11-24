import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../../components/slideProducts/Product";
import "./categorypage.css";
import SlideProductlLoading from "../../components/slideProducts/SlideProductlLoading";
import PageTransition from "../../components/PageTransition";
function CategoryPage() {
  const { category } = useParams();
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => {
        setCategoryProducts(data);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [category]);

  return (
    <PageTransition key={category}>
      <div className="category-products">
        {loading ? (
          <SlideProductlLoading key={category} />
        ) : (
          <div className="container">
            <div className="top-slide">
              <h2>
                {category.replace("-", " ")} : {categoryProducts.limit}
              </h2>
              <p>{categoryProducts.products[0].description}</p>
            </div>
            <div className="products">
              {categoryProducts.products.map((item, index) => (
                <Product item={item} key={index} />
              ))}
            </div>
          </div>
        )}
      </div>
    </PageTransition>
  );
}

export default CategoryPage;
