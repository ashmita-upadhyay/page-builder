import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import BlockRenderer from "./BlockRenderer";

export default function Canvas({ blocks, setBlocks }) {
  const handleDrag = (result) => {
    if (!result.destination) return;

    const items = Array.from(blocks);
    const [moved] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, moved);

    setBlocks(items);
  };

  return (
    <div className="w-3/4 p-4 bg-white">
      <DragDropContext onDragEnd={handleDrag}>
        <Droppable droppableId="canvas">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {blocks.map((block, index) => (
                <Draggable key={block.id} draggableId={block.id} index={index}>
                  {(provided) => (
                    <div
                      className="mb-4 p-4 border rounded shadow"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <BlockRenderer
                        block={block}
                        setBlocks={setBlocks}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}