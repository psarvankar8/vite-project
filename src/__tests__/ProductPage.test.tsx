// ProductPage.test.tsx
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import * as reactRedux from 'react-redux';
import ProductPage from '../components/ProductPage'; // Assuming ProductPage is in components
import store  from '../redux/store';
import fetchMock from 'jest-fetch-mock';

jest.mock('react-redux'); // Mock the entire react-redux module

// Enable fetchMock for mocking API calls
fetchMock.enableMocks();

describe('ProductPage Component', () => {
  // Mock Redux state for products
  const mockProductState = {
    product: {
      items: [
        { id: 1, name: 'Product 1', imageUrl: 'img1.png', price: 10 },
        { id: 2, name: 'Product 2', imageUrl: 'img2.png', price: 20 },
      ],
      loading: false,
    },
  };

  beforeEach(() => {
    // Reset fetchMock before each test
    fetchMock.resetMocks();
  });

  // Snapshot test for rendering
  it('should render ProductPage correctly (Snapshot)', () => {
    // Mock useSelector to return the mocked Redux product state
    (reactRedux.useSelector as unknown as jest.Mock).mockReturnValue(mockProductState);

    const { asFragment } = render(
      <Provider store={store}>
        <ProductPage />
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  // API functionality test
  it('should fetch products from API and display them correctly', async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify([
        { id: 1, name: 'Product 1', imageUrl: 'img1.png', price: 10 },
        { id: 2, name: 'Product 2', imageUrl: 'img2.png', price: 20 },
      ])
    );

    // Mock the Redux state
    (reactRedux.useSelector as unknown as jest.Mock).mockReturnValue(mockProductState);

    render(
      <Provider store={store}>
        <ProductPage />
      </Provider>
    );

    // Wait for the products to be rendered
    await waitFor(() => {
      const productElements = screen.getAllByText((content) =>
        content.startsWith('Product')
      );
      
      // Expect both products to be found in the DOM
      expect(productElements.length).toBe(2); // Should find 2 products
    });

    // Ensure the fetch was called once
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  // CSS functionality test
  it('should apply correct CSS class to product elements', () => {
    // Mock useSelector to return the mocked Redux product state
    (reactRedux.useSelector as unknown as jest.Mock).mockReturnValue(mockProductState);

    render(
      <Provider store={store}>
        <ProductPage />
      </Provider>
    );

    // Check if the first product is rendered with the correct CSS class
    const productElements = screen.getByText('Product 1');
    expect(productElements).toHaveClass('product-item'); // Assuming .product-item is the CSS class applied to product elements
  });
});
