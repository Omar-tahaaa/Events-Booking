import AppNav from "../Components/AppNav";
import Home from "../Components/Home";

import styless from "./HomePage.module.css";

function HomePage() {
  return (
    <div className={styless.homePage}>
      <AppNav />
      <Home />
    </div>
  );
}

export default HomePage;
