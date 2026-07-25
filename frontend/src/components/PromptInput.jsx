import { useState } from "react";
import "./PromptInput.css";

function PromptInput({ onSubmit, onSkillClick, loading = false }) {
  const [prompt, setPrompt] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!prompt.trim()) return;

    onSubmit(prompt);
  };

  return (
    <div className="prompt-container">
      <div className="prompt-header">
        <h2>Brew Your Prompt ☕</h2>
        <p>Turn ordinary prompts into extraordinary ones.</p>
      </div>

      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="What's brewing in your mind today?"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          maxLength={3000}
        />

        <div className="prompt-footer">
          <span>{prompt.length}/3000</span>

          <div className="buttons">
            <button
              type="button"
              className="skill-btn"
              onClick={onSkillClick}
            >
              🍃 Choose Skill
            </button>

            <button
              type="submit"
              className="brew-btn"
              disabled={loading}
            >
              {loading ? "Brewing..." : "☕ Brew Prompt"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default PromptInput;