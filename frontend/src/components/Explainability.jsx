import "./Explainability.css";

function Explainability({ explanations = [] }) {
  return (
    <div className="explainability-card">
      <div className="explainability-header">
        <span className="header-icon">🫖</span>
        <div>
          <h2>Tea Notes</h2>
          <p>Here's how your prompt was refined.</p>
        </div>
      </div>

      {explanations.length === 0 ? (
        <div className="empty-state">
          <p>No refinements yet.</p>
        </div>
      ) : (
        <div className="notes-container">
          {explanations.map((item, index) => (
            <div className="note" key={index}>
              <span className="note-icon">🌸</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Explainability;