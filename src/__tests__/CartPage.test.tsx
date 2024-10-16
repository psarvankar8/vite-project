// CartPage.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import * as reactRedux from 'react-redux';
import CartPage from '../components/CartPage'; // Assuming CartPage is in components
import store  from '../redux/store';

jest.mock('react-redux'); // Mock the entire react-redux module

describe('CartPage Component', () => {
  // Mock the redux state
  const mockCartState = {
    cart: {
      cartItems: [
        { id: 1, name: 'Product 1', price: 10, imageUrl: 'img1.png' },
        { id: 2, name: 'Product 2', price: 20, imageUrl: 'img2.png' }
      ],
    },
  };

  beforeEach(() => {
    // Mock useSelector to return the mocked cart state
    (reactRedux.useSelector as unknown as jest.Mock).mockReturnValue(mockCartState);
  });

  it('should render CartPage correctly (Snapshot)', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <CartPage />
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should display correct cart items', () => {
    render(
      <Provider store={store}>
        <CartPage />
      </Provider>
    );

    // Check if cart items are displayed
    const product1 = screen.getByText('Product 1');
    const product2 = screen.getByText('Product 2');
    expect(product1).toBeInTheDocument();
    expect(product2).toBeInTheDocument();
  });

  it('should remove item from cart when clicking remove button', () => {
    render(
      <Provider store={store}>
        <CartPage />
      </Provider>
    );

    // Assuming there's a button with text 'Remove' for each cart item
    const removeButtons = screen.getAllByText('Remove');
    fireEvent.click(removeButtons[0]); // Simulate removing the first item

    // Check if the item was removed (mock the state change accordingly if needed)
    expect(screen.queryByText('Product 1')).not.toBeInTheDocument();
  });
});
