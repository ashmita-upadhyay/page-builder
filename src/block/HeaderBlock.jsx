import React from "react";

export default function HeaderBlock({ block, setBlocks }) {
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
      <input
        type="text"
        placeholder="Enter heading..."
        className="w-full border p-2 rounded text-xl font-bold"
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