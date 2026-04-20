import React from "react";

export default function ImageBlock({ block, setBlocks }) {
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
        placeholder="Enter image URL..."
        className="w-full border p-2 rounded mb-2"
        value={block.content}
        onChange={handleChange}
      />

      {block.content && (
        <img
          src={block.content}
          alt="preview"
          className="w-full rounded"
        />
      )}

      <button
        onClick={handleDelete}
        className="mt-2 text-red-500 text-sm"
      >
        Delete ❌
      </button>
    </div>
  );
}