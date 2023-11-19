import React from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import List from './List';

const Lists = React.memo( ({reser, setReser, setIsEditing, handleEdit}) => {



    const handleEnd = (result) => {
        if(!result.destination) return;
    
        const newReser = reser;
    
        // 변경 기능 아이템을 지우기
        const [removeItem] = newReser.splice(result.source.index, 1);
        // 받은 값을 잡아줌
        newReser.splice(result.destination.index, 0, removeItem);
        setReser(newReser);
    }
  return (
    <div>
    <DragDropContext onDragEnd={handleEnd}>
    <Droppable droppableId="listsx">
        {(provided) => (
        <div {...provided.droppableProps} ref={provided.innerRef}>
            {reser.map((list, index) => (
                <Draggable key={list.id} draggableId={list.id.toString()} index={index}>
                    {(provided) => (
                    <List id={list.id} title={list.title} cost={list.cost}  reser={reser} setReser={setReser} provided={provided} setIsEditing={setIsEditing}
                    handleEdit = {handleEdit}/>
                    )}
                </Draggable>
            ) )}
            {provided.placeholder}
        </div>
        )}
        </Droppable>
      </DragDropContext>
      </div>
  )
})

export default Lists



