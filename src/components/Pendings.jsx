import "./Pendings.css";
import { Check } from "lucide-react";

const Pendings = ({ todos, onComplete }) => {
  return (
    <div className="pendings">
      <h2>Pending ToDos</h2>
      {todos.length === 0 ? (
        <p>No Pending Todos</p>
      ) : (
        todos.map((todo, index) => (
          <div key={index} className="pending-container">
            <p>{todo}</p>
            <button
              className="complete-btn"
              onClick={() => onComplete(index)}
              title="Mark as completed"
            >
              <Check size={18} />
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Pendings;
