import "./Workflow.css";

const agents = [
  {
    id: 1,
    name: "Strategy",
    icon: "🧠",
    color: "#A7C7E4",
  },
  {
    id: 2,
    name: "Technique",
    icon: "🎯",
    color: "#F6C94D",
  },
  {
    id: 3,
    name: "Refiner",
    icon: "✨",
    color: "#F29BB9",
  },
  {
    id: 4,
    name: "Critic",
    icon: "🔍",
    color: "#E45688",
  },
  {
    id: 5,
    name: "Scorecard",
    icon: "📊",
    color: "#5D7B3D",
  },
  {
    id: 6,
    name: "Explain",
    icon: "🫖",
    color: "#0C6038",
  },
];

function Workflow({ activeStep = 0 }) {
  return (
    <div className="workflow-container">
      <h2 className="workflow-title">Brewing Process ☕</h2>

      <div className="workflow">
        {agents.map((agent, index) => (
          <div className="workflow-item" key={agent.id}>
            <div
              className={`workflow-card ${
                activeStep === agent.id ? "active" : ""
              }`}
            >
              <div
                className="workflow-icon"
                style={{ backgroundColor: agent.color }}
              >
                {agent.icon}
              </div>

              <p>{agent.name}</p>
            </div>

            {index !== agents.length - 1 && (
              <div className="workflow-line"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Workflow;