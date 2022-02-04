import { useState } from "react";

function App() {    
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => {
    setToDo(event.target.value);
  }
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo === "") {
      return;
    }
    setToDos( (currentArray) => currentArray = [toDo, ...currentArray] );
    setToDo("");
  }
  return (
    <div> 
      <h1>할일({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input 
          onChange={onChange} 
          value={toDo}
          type="text" 
          placeholder="할일을 적어" 
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map( (item, index) => { return <li key={index}>{item}</li>; }  )}
      </ul>
    </div>
  );
}

export default App;
