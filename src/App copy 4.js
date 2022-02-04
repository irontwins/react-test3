import { useState } from "react";
import { useEffect } from 'react/cjs/react.development';
import propTypes from 'prop-types';

function App() {  
  const [loading, setLoading] = useState(true);  
  const [coins, setCoins] = useState([]);
  const [toBTC, setToBTC] = useState(0);
  const [dollar, setDollar] = useState();
  const onClick = () => {    
    setToBTC(dollar / coins.quotes.USD.price);
    setDollar("");
   };

  const onChange = (event) => {    
    setDollar(event.target.value)
  }

  useEffect(()=>{
    fetch("https://api.coinpaprika.com/v1/tickers/btc-bitcoin")    
    .then((response) => response.json())
    .then((json) => { setCoins(json); setLoading(false); } );
  }, [])

  
  // console.log(coins.quotes.USD.price);
  return (
    <div>
      <h1>코인</h1>
        { 
          loading? <strong>로딩중...</strong> : 
          `${coins.name}:$${coins.quotes.USD.price}`
        }
        
        {/* {coins.map((coin, index) => { return <option key={index}>{coin.name}({coin.symbol}: ${coin.quotes.USD.price} USD</option> } )}         */}
        <br />
        <input value={dollar} onChange={onChange} type="number" placeholder="USD를 입력하세요" />
        <button onClick={onClick}>변환</button>
        <h2>몇개? {toBTC}</h2>
    </div>
  );
}

export default App;
