import { useState, useEffect } from "react";
import Palette from "./component/Palette";
import Canvas from "./component/Canvas";

function App() {
  const [blocks, setBlocks] = useState([]);

  // load from localStorage
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("blocks"));
    if (data) setBlocks(data);
  }, []);

  // save to localStorage
  useEffect(() => {
    localStorage.setItem("blocks", JSON.stringify(blocks));
  }, [blocks]);

  return (
    <div className="flex h-screen">
      <Palette setBlocks={setBlocks} />
      <Canvas blocks={blocks} setBlocks={setBlocks} />
    </div>
  );
}

export default App;