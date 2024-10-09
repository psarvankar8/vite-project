import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import { Provider } from "react-redux";
import store from "./redux/store";


const App: React.FC = () => {

  return (
    <Provider store={store}>
      <Router>
      <Routes>
        <Route
          path="/"
          element={<Home/>}
        />
        <Route
          path="/cart"
          element={<CartPage/>}
        />
      </Routes>
    </Router>
    </Provider>
  );
};

export default App;
