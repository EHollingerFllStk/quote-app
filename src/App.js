import { useEffect, useState } from "react"
import axios from "axios";
import Quote from "./Quote";
import { Container, Center } from "@mantine/core";

function App() {
  const [quote, setQuote] = useState(null);

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
    <div style={{ background: "#22b8cf" }}>
      <Container>
        <Center style={{ height: "100vh"}}>
          <Quote author ={quote? quote.author : ""} content = 
          {quote ? quote.content : ""} getQuote={getQuote} />
        </Center>
      </Container>
     
    </div>
    
  );
}

export default App;
