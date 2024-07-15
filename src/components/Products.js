import React from "react";
import "./Product.css";

const Products = ({productsData, deleteData}) => {

  return (
    <div className="products container">
      <div className="products-container">
        {!productsData && <h1>Product topilmadi</h1>}

        {productsData &&
          productsData.map((item) => {
            return (
              <div key={item.id} className="product">
                <div className="product-img">
                  <img src={item.url} alt={item.title} />
                </div>
                <p className='product-zoti'>Zoti: {item.zoti}</p>
                <p className='product-yoshi'>Yoshi: {item.yoshi}</p>
                <p className='product-manzil'>Manzil: {item.manzil}</p>
                <p className='product-tel'>Tel: {item.tel}</p>
                <p className='product-narhi'>Narhi: {item.narhi}</p>
                
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Products;
