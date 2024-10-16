// Navbar.test.tsx
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import * as reactRedux from 'react-redux';
import Navbar from '../components/Navbar'; // Assuming Navbar is in components
import  store  from '../redux/store';

jest.mock('react-redux'); // Mock the entire react-redux module

describe('Navbar Component', () => {
  // Mock the redux state
  const mockCartState = { cart: { cartItems: [{ id: 1, name: 'Product 1' }, { id: 2, name: 'Product 2' }] } };

  beforeEach(() => {
    // Mock useSelector to return the mocked cart state
    (reactRedux.useSelector as unknown as jest.Mock).mockReturnValue(mockCartState);
  });

  it('should render Navbar correctly (Snapshot)', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Navbar />
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should display correct cart item count', () => {
    render(
      <Provider store={store}>
        <Navbar />
      </Provider>
    );

    // Check if the cart icon displays the correct number of items
    const cartCount = screen.getByText('2'); // Assuming the cart item count is shown as a number on the cart icon
    expect(cartCount).toBeInTheDocument();
  });
});
