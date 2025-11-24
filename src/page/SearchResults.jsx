import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import SlideProductlLoading from "../components/slideProducts/SlideProductlLoading";
import Product from "../components/slideProducts/Product";

function SearchResults() {
  const [result, setResult] = useState([]);
  const query = new URLSearchParams(useLocation().search).get("query");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const res = await fetch(
          `https://dummyjson.com/products/search?q=${query}`
        );
        const data = await res.json();
        setResult(data.products || []);
      } catch (error) {
        console.error("Search Error : ", error);
      } finally {
        setLoading(false);
      }
    };
    if (query) fetchResults();
  }, [query]);

  return (
    <PageTransition key={query}>
      <div className="category-products">
        {loading ? (
          <SlideProductlLoading key={query} />
        ) : result.length > 0 ? (
          <div className="container">
            <div className="top-slide">
              <h2>Results for : {query}</h2>
            </div>
            <div className="products">
              {result.map((item, index) => (
                <Product item={item} key={index} />
              ))}
            </div>
          </div>
        ) : (
          <div className="container">
            <p>No Result found</p>{" "}
          </div>
        )}
      </div>
    </PageTransition>
  );
}

export default SearchResults;
