import React from 'react'

const List = React.memo( ({id, title, cost, reser, setReser, provided, handleEdit}) => {


  const handleClick = (id) => {
      let newList = reser.filter(list => list.id !== id);
      setReser(newList);
      localStorage.setItem('reserList', JSON.stringify(newList));
      // reser을 새로운 리스트로 업데이트
      }
  return (
    <div>
    

    <div className='listBox flex flex-row justify-between' key={id} {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}>
    <div>{title}</div>
    <div>{cost}</div>
    <div>
        <button onClick={() => handleEdit(id, title, cost)}  className='mr-4'>edit</button>
        <button onClick={() => handleClick(id)}>delete</button>
    </div>
    </div>

</div>
  )
})

export default List