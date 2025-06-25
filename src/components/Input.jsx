import "./Input.css";

const Input = ({ value, onChange, onSubmit }) => {
  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Enter todo"
        value={value}
        onChange={onChange}
      />
      <button className="input-add" onClick={onSubmit}>
        Add
      </button>
    </div>
  );
};

export default Input;
