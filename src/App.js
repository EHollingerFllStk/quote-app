import { useEffect, useState } from "react"
import axios from "axios";
import Quote from "./Quote";



function App() {

  const getQuote = () => {
    axios.get('https://api.quotable.io/random')
      .then((res) => {
        setQuote(res.data.content);
      }).catch((err) => {
        alert(err);
      })
    }
  
  useEffect(() => {
    getQuote();
  }, [])

  return (
    <div>
      Hello World
    </div>
    
  );
}

export default App;
