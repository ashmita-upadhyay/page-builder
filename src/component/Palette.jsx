import { v4 as uuidv4 } from "uuid";

export default function Palette({ setBlocks }) {
  const addBlock = (type) => {
    const newBlock = {
      id: uuidv4(),
      type,
      content: "",
    };

    setBlocks((prev) => [...prev, newBlock]);
  };

  return (
    <div className="w-1/4 bg-gray-100 p-4">
      <h2 className="font-bold mb-4">Blocks</h2>

      <button onClick={() => addBlock("text")} className="block mb-2">
        ➕ Text
      </button>

      <button onClick={() => addBlock("image")} className="block mb-2">
        ➕ Image
      </button>

      <button onClick={() => addBlock("header")} className="block">
        ➕ Header
      </button>
    </div>
  );
}