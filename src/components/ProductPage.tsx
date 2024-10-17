// src/components/ProductPage.tsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/productSlice";
import { addToCart } from "../redux/cartSlice";
import { RootState, AppDispatch } from "../redux/store";
import "../style/productPage.css";

const ProductPage: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const products = useSelector((state: RootState) => state.product.items);
  const loading = useSelector((state: RootState) => state.product.loading);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <h1>Products</h1>
      {loading && <p>Loading...</p>}
      <div data-testid="product-grid" className="product-grid">
        {products && products.length > 0
          ? products.map((product: any, index: any) => (
              <div key={product.id} className="product-item">
                <img src={product.imageUrl} alt={product.name} />
                <h2>{product.title}</h2>
                <p>${product.price}</p>
              </div>
            ))
          : !loading && <p>No products available.</p>}
      </div>
    </div>
  );
};

export default ProductPage;
``