import React from 'react';



 const List2 = ({key, id, data, cost, reser, setReser, provided, snapShot}) => {
    const handleClick = (id) => {
        let newList = reser.filter(list => list.id !== id);
        setReser(newList);
        localStorage.setItem('reserList', JSON.stringify([...reser, newList]));
        // reser을 새로운 리스트로 업데이트
        }
  return (
    <div>

    <div className='listBox flex flex-row justify-between' key={id} {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}>
    <div>{data}</div>
    <div>{cost}</div>
    <div>
        <button className='mr-4'>edit</button>
        <button onClick={() => handleClick(id)}>delete</button>
    </div>
    </div>

</div>
  )
}

export default List2