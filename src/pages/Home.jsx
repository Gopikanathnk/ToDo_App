import { useEffect , useState } from "react"
import Completed from "../components/Completed"
import Input from "../components/Input"
import Pendings from "../components/Pendings"
import "./Home.css"

const Home = () => {
    const [todo,setTodo]=useState("")
    const [todos, setTodos] = useState([]);
    const [completedTodos, setCompletedTodos] = useState([]);

    const handleChange = (e) =>{
        setTodo(e.target.value)
    }

    const handleSubmit = () =>{

    }


 return (
<>
<div className="container">


<Input onChange={handleChange}/>
<Pendings todos={todos}/>
<Completed todos={completedTodos}/>
</div>
</>
 )
} 
export default Home
