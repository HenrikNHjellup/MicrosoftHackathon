import React, {useEffect, useState} from 'react';
import { Button, Cards, Tabs, Tab, Accordion, Card, Image, Modal, Form, Container } from "react-bootstrap";

import "./Overview.css";
//import ShowProducts from './ShowProducts';


const Home = () => {

    const [tokenCount, setTokenCount] = useState(0);
    const incrementTokenCount = () => setTokenCount(tokenCount + 1);
    let decrementTokenCount = () => setTokenCount(tokenCount - 1);
  
	return(
        <div className="App">
        <h1>

        </h1>
        <div>
          <button onClick={incrementTokenCount}>
            Add token
          </button>
          <button onClick={decrementTokenCount}>
            Remove token
          </button>
        </div>
        <div className="tokenDiv">
          You have {tokenCount} tokens
        </div>
      </div>
  )
}

export default Home;