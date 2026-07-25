import "./SkillModal.css";

const skills = [
  { name: "Coding 💻", color: "#A7C7E4" },
  { name: "Writing ✍️", color: "#F29BB9" },
  { name: "Marketing 📈", color: "#F6C94D" },
  { name: "Research 🔬", color: "#5D7B3D" },
  { name: "Business 💼", color: "#E45688" },
  { name: "Education 📚", color: "#0C6038" },
];

function SkillModal({ isOpen, onClose, onSelect }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="skill-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <h2>Select Your Brew 🍵</h2>
        <p>Choose the domain for your prompt.</p>

        <div className="skill-grid">
          {skills.map((skill) => (
            <button
              key={skill.name}
              className="skill-card"
              style={{ backgroundColor: skill.color }}
              onClick={() => {
                onSelect(skill.name);
                onClose();
              }}
            >
              {skill.name}
            </button>
          ))}
        </div>

        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default SkillModal;