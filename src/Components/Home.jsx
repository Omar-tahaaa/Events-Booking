import styless from "./Home.module.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className={styless.home}>
      <h1>
        {/* Search for something you love or */}
        check out popular events in your area.
      </h1>
      <p>A Guide To Different Types of Events And Their Purpose</p>
      <Link to="events">start tracking now</Link>
    </section>
  );
}

export default Home;
