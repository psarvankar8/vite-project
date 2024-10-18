// src/components/ProductPage.tsx
<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/productSlice';
import { addToCart } from '../redux/cartSlice';
import { RootState, AppDispatch } from '../redux/store';
import '../style/productPage.css';
=======
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/productSlice";
import { addToCart } from "../redux/cartSlice";
import { RootState, AppDispatch } from "../redux/store";
import "../style/productPage.css";
>>>>>>> 36dae1eb1611a0ba6db64aae3a8a802fda174cba

// Define the Product interface
interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  totalPrice?: number;  // Optional field
}

const ProductPage: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const products = useSelector((state: RootState) => state.product.items);
  const loading = useSelector((state: RootState) => state.product.loading);
  const [liveMsg, setLiveMsg] = useState<string | null>(null);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  
  const handleAddToCart = (item: { id: number; price: number ;image: string; totalPrice:number; title: string}) => {
    dispatch(addToCart({ ...item, quantity: 1 }));
    setLiveMsg(`${item.title} has been added to your cart.`); 
    setTimeout(() => setLiveMsg(null), 3000); 
  };


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
    <div className="product-grid" role="list" aria-label="Product list">
      {products.map((product: Product) => (
        <article className="product-card" key={product.id} role="listitem" aria-labelledby={`product-${product.id}-name`}>
          <figure>
            <img 
              src={product.image} 
              alt={`Image of ${product.title}`} 
              className="product-image" 
            />
            <figcaption id={`product-${product.id}-name`}>
             {product.title}
            </figcaption>
          </figure>
          <p>Price: ${product.price}</p>
          <button 
            onClick={() => handleAddToCart(product)}
            aria-label={`Add ${product.title} to Cart`}
          >
            Add to Cart
          </button>
        </article>
      ))}
    </div>
  </section>
  );
};

export default ProductPage;
``