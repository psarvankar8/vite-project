import React from "react";
import FoodList from "../components/FoodList";
import Navbar from "../components/Navbar";

const Home: React.FC = () => {
  return (
    <div style={{width: "1024px"}}>
      <Navbar/>
      <div className="container">
        <FoodList />
      </div>
    </div>
  );
};

export default Home;
