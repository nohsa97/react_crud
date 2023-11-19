import React from 'react'

export default function Form({reser, setReser, data, setData, handleSubmit, setIsEditing, isEditing}) {

  

    const handleChange = (e, key) => {
        if (key === "reser") {
          console.log("reser", e.target.value);
          setData((prev) => {
            return {...prev, title: e.target.value};
          })
        //   setData(e.target.value);
        }
        else if (key === "cost") {
            console.log("ss", e.target.value);
         setData((prev) => {
            return {...prev, cost: e.target.value};
            })
      }
    }

    if(!isEditing){
        return (
            <div>
            <h1>예산 계산기</h1>
            <form className='inputBox flex ' onSubmit={handleSubmit}>
              <div>
                <h3>지출 항목</h3>
                <input onChange={(e) => handleChange(e, "reser")} value={data.title}/>
              </div>
        
              <div>
                <h3>비용</h3>
                <input type='Number' onChange={(e) => handleChange(e, "cost")} value={data.cost} />
              </div>
              <button type='submit'>제출</button>
            </form>
            </div>
          )
    }
    else {
        return (
            <div>
            <h1>예산 계산기</h1>
            <form className='inputBox flex ' onSubmit={handleSubmit}>
              <div>
                <h3>지출 항목</h3>
                <input onChange={(e) => handleChange(e, "reser")} value={data.title}/>
              </div>
        
              <div>
                <h3>비용</h3>
                <input type='Number' onChange={(e) => handleChange(e, "cost")}  value={data.cost}/>
              </div>
              <button type='submit'>수정</button>
            </form>
            </div>
          )
    }




}
