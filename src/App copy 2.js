import { useState, useEffect } from "react";

function Hi() {  
  useEffect(() => {
    console.log("created");
    return () => console.log("destroyed");
    
  }, [])
  return <h1>hi~</h1>;
}

function App() {  
  const [showing, setShowing] = useState(false);
  const onClick = () => {
    setShowing( (prev) => !prev );
  }
  return (
    <div>    
      {showing? <Hi/> : null}
      <button onClick={onClick}>{showing? "hide":"show" }</button>
    </div>
  );
}

export default App;
