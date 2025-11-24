import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import ProductDetailsLoading from "./ProductDetailsLoading";
import { FaStar, FaRegStarHalfStroke } from "react-icons/fa6";
import SlideProduct from "../../components/slideProducts/SlideProduct";
import SlideProductlLoading from "../../components/slideProducts/SlideProductlLoading";
import { CartContext } from "../../components/context/CartContext";
import Productimages from "./Productimages";
import ProductInfo from "./ProductInfo";
import PageTransition from "../../components/PageTransition";
export default function ProductDetails() {
  const [product, setProduct] = useState(null);
  const [category, setCategory] = useState([]);
  const [loadingCategory, setLoadingCategory] = useState(true);
  const { addToCart } = useContext(CartContext);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, [id]);

  useEffect(() => {
    if (!product) return;
    fetch(`https://dummyjson.com/products/category/${product.category}`)
      .then((res) => res.json())
      .then((data) => setCategory(data.products))
      .catch((err) => console.log(err))
      .finally(() => setLoadingCategory(false));
  }, [product?.category]);
  if (loading) return <ProductDetailsLoading />;
  if (!product) return <div>Product Not Found</div>;
  const stars = [];
  const fullStars = Math.floor(product.rating || 0);
  const hasHalf = (product.rating || 0) % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={`star-${i}`} className="star-icon" />);
  }
  if (hasHalf) {
    stars.push(<FaRegStarHalfStroke key="star-half" className="star-icon" />);
  }

  return (
    <PageTransition key={id}>
      <div>
        <div className="item-details">
          <div className="container">
            <Productimages product={product} />

            <ProductInfo
              product={product}
              addToCart={addToCart}
              stars={stars}
            />
          </div>
        </div>
        {loadingCategory ? (
          <SlideProductlLoading />
        ) : (
          <SlideProduct
            key={product.category}
            data={category}
            title={product.category.replace("-", " ")}
          />
        )}
      </div>
    </PageTransition>
  );
}
