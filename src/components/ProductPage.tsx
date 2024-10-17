// src/components/ProductPage.tsx
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/productSlice';
import { addToCart } from '../redux/cartSlice';
import { RootState, AppDispatch } from '../redux/store';
import '../style/productPage.css';

const ProductPage: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const products = useSelector((state: RootState) => state.product.items);
  const loading = useSelector((state: RootState) => state.product.loading);
  const [liveMsg, setLiveMsg] = useState<string | null>(null);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  
  const handleAddToCart = (product: any) => {
    dispatch(addToCart(product));
    setLiveMsg(`${product.title} has been added to your cart.`); 
    setTimeout(() => setLiveMsg(null), 3000); 
  };


  return (
    <section aria-labelledby="product-heading">
    <h1 id="product-heading">Products</h1>
    {loading && <p>Loading...</p>}
    {/* ARIA live region for screen reader feedback */}
    <div
        aria-live="assertive"
        aria-atomic="true"
        style={{ position: 'absolute', left: '-9999px' }}  
      >
        {liveMsg}
      </div>
    <div className="product-grid" role="list" aria-label="Product list">
      {products.map((product: any) => (
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
