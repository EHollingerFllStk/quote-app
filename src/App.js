import { useEffect } from "react"
import axios from "axios";

function App() {

  const getQuote = () => {
    axios.get('https://api.quotable.io/random')
      .then((res) => {
        alert(res.data.content);
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
