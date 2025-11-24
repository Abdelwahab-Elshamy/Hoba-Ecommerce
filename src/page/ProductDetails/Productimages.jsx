import React from "react";

function Productimages({ product }) {
  return (
    <>
      <div className="imgs-item">
        <div className="big-img">
          <img id="big-img" src={product.images[0]} alt={product.title} />
        </div>
        <div className="sm-img">
          {product.images.map((img, index) => (
            <div key={index} className="img-dev-sm">
              <img
                src={img}
                alt=""
                onClick={() => (document.getElementById("big-img").src = img)}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Productimages;
