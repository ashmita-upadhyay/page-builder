import React from "react";

export default function TextBlock({ block, setBlocks }) {
  const handleChange = (e) => {
    setBlocks((prev) =>
      prev.map((b) =>
        b.id === block.id ? { ...b, content: e.target.value } : b
      )
    );
  };

  const handleDelete = () => {
    setBlocks((prev) => prev.filter((b) => b.id !== block.id));
  };

  return (
    <div>
      <textarea
        className="w-full border p-2 rounded"
        placeholder="Enter text..."
        value={block.content}
        onChange={handleChange}
      />

      <button
        onClick={handleDelete}
        className="mt-2 text-red-500 text-sm"
      >
        Delete ❌
      </button>
    </div>
  );
}