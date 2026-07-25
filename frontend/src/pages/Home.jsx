import { Link } from "react-router-dom";
import "./Home.css";
import hero from "../assets/hero.png";

function Home() {
  return (
    <div className="home-page">
      <div className="home-left">
        <h1>PrompTea</h1>
        <p>Your agentic prompt engineering copilot.</p>
        <p className="tagline">
          Brew production-ready prompts, one agent at a time.
        </p>

        <Link to="/brew">
          <button className="start-btn">Start Brewing</button>
        </Link>
      </div>

      <div className="home-right">
        <img src={hero} alt="PrompTea Hero" className="home-hero" />
      </div>
    </div>
  );
}

export default Home;