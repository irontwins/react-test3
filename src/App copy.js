import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);  
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue( (prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("항상 실행");  
  useEffect(() => {
    console.log("한번만 실행");
  }, []);
  useEffect( () => {
    console.log("검색할때만");    
  }, [keyword]);
  useEffect( () => {
    console.log("카운터 올릴때만"); 
  }, [counter]);
  useEffect( () => {
    console.log("키워드 카운터 올릴때만");
  }, [counter, keyword])
  return (
    <div>
      <input 
        value={keyword} 
        onChange={onChange} 
        type="text" 
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
