import "./Scorecard.css";

function Scorecard({
  overall = 0,
  clarity = 0,
  context = 0,
  specificity = 0,
  structure = 0,
}) {
  const metrics = [
    { label: "Clarity", value: clarity, color: "#E45688" },
    { label: "Context", value: context, color: "#F6C94D" },
    { label: "Specificity", value: specificity, color: "#A7C7E4" },
    { label: "Structure", value: structure, color: "#5D7B3D" },
  ];

  return (
    <div className="scorecard">
      <div className="overall-score">
        <h3>Prompt Score</h3>

        <div className="score-circle">
          <span>{overall}</span>
        </div>
      </div>

      <div className="metrics">
        {metrics.map((metric) => (
          <div className="metric" key={metric.label}>
            <div className="metric-header">
              <span>{metric.label}</span>
              <span>{metric.value}%</span>
            </div>

            <div className="progress">
              <div
                className="progress-fill"
                style={{
                  width: `${metric.value}%`,
                  background: metric.color,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Scorecard;