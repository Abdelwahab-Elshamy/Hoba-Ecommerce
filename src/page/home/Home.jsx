import "./home.css";
import SlideProduct from "../../components/slideProducts/SlideProduct";
import HeroSlider from "../../components/HeroSlider";
import { useEffect, useState } from "react";
import SlideProductlLoading from "../../components/slideProducts/SlideProductlLoading";
import PageTransition from "../../components/PageTransition";
export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const results = await Promise.all(
          categories.map(async (category) => {
            const response = await fetch(
              `https://dummyjson.com/products/category/${category}`
            );
            const data = await response.json();
            return { [category]: data.products };
          })
        );
        const productsData = Object.assign({}, ...results);
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const categories = [
    "smartphones",
    "mobile-accessories",
    "kitchen-accessories",
    "groceries",
    "sports-accessories",
  ];
  return (
    <PageTransition>
      <>
        <HeroSlider />

        {loading
          ? categories.map((category) => (
              <SlideProductlLoading key={category} />
            ))
          : categories.map((category, id) => (
              <SlideProduct
                title={category.replace("-", " ")}
                data={products[category]}
                key={id}
              />
            ))}
      </>
    </PageTransition>
  );
}
