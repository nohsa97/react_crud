import './App.css';
import React, { useState } from 'react'
import Lists from './Components/Lists';
import Form from './Components/Form';

export default function App()  {

  const initialReser = localStorage.getItem("reserList") ? JSON.parse(localStorage.getItem("reserList")) : [];
  
  

  const [reser, setReser] = useState(initialReser);
  const [data, setData] = useState({title : "", cost : ""});


  const [isEditing, setIsEditing] = useState(false);


  const handleEdit = (id, title, cost) => {
    setIsEditing(id);
    setData({title : title, cost : cost});
  }


  const deleteAll = () => {
    setReser([]);
    localStorage.clear();
  }

  const handleSubmit = (e) => {
    // e.preventDefault();
    if(!isEditing){
      let newList = {
        id : Date.now(),
        title : data.title,
        cost : data.cost,
      }  
    setReser((prev) => [...prev, newList]);
    localStorage.setItem('reserList', JSON.stringify([...reser, newList]));
    }

    else {
      handleEditSubmit(isEditing);
      setIsEditing(false);
    }


}

   const handleEditSubmit = (id) =>  {
    let newReser = reser.map((before) => {
      if (before.id === id) {
        before.title = data.title;
        before.cost = data.cost;
      }
      return before;
    });

    setReser(newReser);
    localStorage.setItem('reserList', JSON.stringify(reser));
    setData({title: "", cost: 0});
   }



  return (
    <div className='Container'>

        
        <Form reser={reser} isEditing={isEditing} setReser={setReser} data={data} setData={setData} handleSubmit={handleSubmit} setIsEditing={setIsEditing}/>
        <Lists reser={reser} setReser={setReser} isEditing={isEditing} setIsEditing={setIsEditing} handleEdit={handleEdit} />


        <button onClick={deleteAll}>목록 지우기</button>
        <h1>총지출 : {reser.reduce((sum, list) => sum + Number(list.cost), 0)}</h1>
    </div>
  )

}



