import TextBlock from "../block/HeaderBlock"
import ImageBlock from "../block/ImageBlock"
import HeaderBlock from "../block/TextBlock"

export default function BlockRenderer({ block, setBlocks }) {
  switch (block.type) {
    case "text":
      return <TextBlock block={block} setBlocks={setBlocks} />;
    case "image":
      return <ImageBlock block={block} setBlocks={setBlocks} />;
    case "header":
      return <HeaderBlock block={block} setBlocks={setBlocks} />;
    default:
      return null;
  }
}