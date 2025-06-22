import "./Pendings.css";

const Pendings = ({ todos }) => {
  return (
    <div className="pendings">
      <h2>Pending ToDos</h2>
      {todos.length === 0 ? (
        <p>No Pending Todos</p>
      ) : (
        todos.map((todo, index) => (
          <div key={index} className="pending-container">
            <p>{todo}</p>
            <button className="complete-btn">Tick</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Pendings;
