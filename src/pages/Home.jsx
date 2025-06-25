import { useState } from "react";
import Completed from "../components/Completed";
import Input from "../components/Input";
import Pendings from "../components/Pendings";
import "./Home.css";

const Home = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = () => {
    if (todo.trim() === "") return; // prevent empty input
    setTodos((prev) => [...prev, todo]);
    setTodo("");
  };

  const handleComplete = (index) => {
    const completed = todos[index];
    setCompletedTodos((prev) => [...prev, completed]);
    setTodos((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <Input value={todo} onChange={handleChange} onSubmit={handleSubmit} />
      <Pendings todos={todos} onComplete={handleComplete} />
      <Completed todos={completedTodos} />
    </div>
  );
};

export default Home;
