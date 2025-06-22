import "./Input.css";

const Input = () => {
  return (
    <div className="input-container">
      <input type="text" placeholder="Enter todo" />
      <button className="input-add">Add</button>
    </div>
  );
};

export default Input;
