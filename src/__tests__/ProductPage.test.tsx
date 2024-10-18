// ProductPage.test.tsx
import React from 'react';
import { render, RenderResult, screen,  waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import ProductPage from '../components/ProductPage'; // Adjust the import path as necessary
import store from '../redux/store';
import fetchMock from 'jest-fetch-mock';

const mockProducts = [
  {
      "id": 1,
      "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      "price": 109.95,
      "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      "rating": {
          "rate": 3.9,
          "count": 120
      }
  },
  {
      "id": 2,
      "title": "Mens Casual Premium Slim Fit T-Shirts ",
      "price": 22.3,
      "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      "rating": {
          "rate": 4.1,
          "count": 259
      }
  },
  {
      "id": 3,
      "title": "Mens Cotton Jacket",
      "price": 55.99,
      "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      "rating": {
          "rate": 4.7,
          "count": 500
      }
  },
  {
      "id": 4,
      "title": "Mens Casual Slim Fit",
      "price": 15.99,
      "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      "rating": {
          "rate": 2.1,
          "count": 430
      }
  },
  {
      "id": 5,
      "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      "price": 695,
      "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
      "category": "jewelery",
      "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      "rating": {
          "rate": 4.6,
          "count": 400
      }
  }
];
fetchMock.enableMocks();

describe('testing ProductPage UI', () => {
  let wrapper: RenderResult;
  beforeEach(()=>{
    fetchMock.resetMocks()
    wrapper = render(<Provider store={store}>
        <ProductPage/>
    </Provider>)
  })

  it('should render and match the snapshot',()=>{
    expect(wrapper).toMatchSnapshot()
  })

  fetchMock.mockResponseOnce(JSON.stringify(mockProducts));
  
  it('testing api call should display products after API call', async () => {
    // Mock API response

    // Check that the loading state is displayed initially before Api call succeeds
    expect(screen.getAllByText(/Loading/i)[0]).toBeInTheDocument();

    // Wait for the products to be fetched and displayed
    await waitFor(() => {
      // mockProducts.forEach((product) => {
      //   expect(screen.getAllByText(`/${product.title}/i`)[0]).toBeInTheDocument();
      // });
      // expect(screen.getAllByText(/Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops/i)[0]).toBeInTheDocument();
      expect(screen.getAllByText(/DANVOUY Womens T Shirt Casual Cotton Short/i)[0]).toBeInTheDocument();
      expect(screen.getAllByText(/Opna Women's Short Sleeve Moisture/i)[0]).toBeInTheDocument();
      expect(screen.getAllByText(/MBJ Women's Solid Short Sleeve Boat Neck V/i)[0]).toBeInTheDocument();
      expect(screen.getAllByText(/Rain Jacket Women Windbreaker Striped Climbing Raincoats/i)[0]).toBeInTheDocument();
    });

  });

  it(' should test the css for productPage component',()=>{
    const productGrid = screen.getByTestId('product-grid'); 
    expect(productGrid).toHaveClass('product-grid'); 
  })
})
