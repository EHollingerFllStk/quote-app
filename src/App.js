import { useEffect, useState } from "react"
import axios from "axios";
import Quote from "./Quote";



function App() {
  const [quote, setQuote] = useState(null);

  if (!content) {
    return null;
  }

  const getQuote = () => {
    axios.get('https://api.quotable.io/random')
      .then((res) => {
        setQuote(res.data);
      }).catch((err) => {
        alert(err);
      })
    }
  
  useEffect(() => {
    getQuote();
  }, [])

  return (
    <div>
      <Quote author ={quote? quote.author : ""} content = 
      {quote ? quote.content : ""} />
    </div>
    
  );
}

export default App;
