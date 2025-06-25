import "./Completed.css";

const Completed = ({ todos }) => {
  return (
    <div className="completed-container">
      <h2>Completed ToDos</h2>
      <div className="completed-todo">
        {todos.length === 0 ? (
          <p>No todos</p>
        ) : (
          todos.map((todo, index) => (
            <div key={index} className="completed-item">
              <p>{todo}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Completed;
