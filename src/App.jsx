import { useState } from 'react';
import "./App.css";
import LeftSide from "./components/LeftSide/LeftSide";
import RightSide from "./components/RightSide/RightSide";


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <LeftSide />
      <RightSide />
    </div>
  )
}

export default App
