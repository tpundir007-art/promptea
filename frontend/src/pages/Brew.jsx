import { useState } from "react";
import "./Brew.css";
import teacup from "../assets/teacup.svg";
import loading from "../assets/loading.gif";
import ReactMarkdown from "react-markdown";

function Brew() {
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);

  function getScoreClass(score) {
    if (score >= 80) return "score-good";
    if (score >= 60) return "score-mid";
    return "score-low";
  }

  const handleBrew = async () => {
    if (prompt.trim() === "") return;

    setIsLoading(true);

    try {
      const res = await fetch("http://127.0.0.1:5000/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();

      const newResult = {
        id: Date.now(),
        originalPrompt: prompt,
        refinedPrompt: data.draft_prompt,
        score: data.score?.overall_score || 0,
        explanation:
        typeof data.explanation === "string"
        ? JSON.parse(data.explanation)
        : data.explanation,
        date: new Date().toISOString().split("T")[0],
        };

      setResult(newResult);

      const existing =
        JSON.parse(localStorage.getItem("brewHistory")) || [];

      localStorage.setItem(
        "brewHistory",
        JSON.stringify([newResult, ...existing])
      );
    } catch (err) {
      console.error(err);
      alert("Backend not running!");
    }

    setIsLoading(false);
  };

  return (
    <div className="brew-page">
      <h1 className="brew-title">
        <img src={teacup} alt="Tea cup" className="teacup-icon" />
        Brew Your Prompt
      </h1>

      <textarea
        className="prompt-box"
        placeholder="Type your prompt here..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button
        className="brew-btn"
        onClick={handleBrew}
        disabled={isLoading}
      >
        {isLoading ? "Brewing..." : "☕ Brew"}
      </button>

      {isLoading && (
        <div className="workflow-placeholder">
          <img
            src={loading}
            alt="Loading"
            className="loading-gif"
          />
          <p>Pipeline running: Strategy → Technique → Refiner → Critic...</p>
        </div>
      )}

      {result && (
        <>
          <div className="section-divider">
            <span>Results</span>
          </div>

          <div className="results">
            <div className="scorecard-placeholder">
              <h3>BREW SCORE 🫖</h3>
              <p className={`score-value ${getScoreClass(result.score)}`}>
                Score: {result.score}/10
              </p>
            </div>

            <div className="explainability-placeholder">
              <h3>Refined Prompt</h3>
              <p>{result.refinedPrompt}</p>

              <h3>Why this works</h3>

<h4><strong>Summary</strong></h4>
<p>{result.explanation.summary}</p>

<h4>Major Improvements</h4>
<ul>
  {result.explanation.major_improvements?.map((item, index) => (
    <li key={index}>{item}</li>
  ))}
</ul>

<h4><strong>Techniques Used</strong></h4>
<ul>
  {result.explanation.techniques_used?.map((tech, index) => (
    <li key={index}>
      <strong>{tech.technique}</strong>: {tech.purpose}
    </li>
  ))}
</ul>

<h4><strong>Overall Assessment</strong></h4>
<p>{result.explanation.overall_assessment}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Brew;