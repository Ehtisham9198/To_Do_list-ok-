import React, {useEffect, useRef, useState } from 'react';
import './App.css';

function App() {

  let [val, limi_changer]= useState('');
  let [list, SetList]= useState([]);

  const inputRef = useRef("Ehtisham");

  useEffect(()=>{
    console.log(inputRef);
  },[inputRef])
 
  const fun=(event)=>{
  limi_changer(event.target.value);
  }

  const submit_req= (e)=>{
    e.preventDefault();
    SetList((prevList) => [...prevList, val]);
    limi_changer('');
     
     }

    const handleDelete = (index) => {
      SetList((prevList) => {
        const newList = [...prevList];
        newList.splice(index, 1);
        return newList;
      });
     }
    
 

  return (
  <div className='to'>
    <h1 className='to-do'>To-Do List</h1>
    <form onSubmit={submit_req}>
    <input className='ink' type="text" placeholder=' Enter the task...' ref={inputRef} required='true' value={val}/>
    <button className='button'>Add task</button>
    </form>
    <br></br>
    <br></br>
    <ul>
    {list.map((e,index)=>{ 
            return <li key={index} className='curlist'>{e} {<button >Edit</button>} {<button className='Delbut' onClick={() => handleDelete(index)}>Delete</button>}</li>
          
             })}
    
    </ul> 
   
  </div>
  );
}

export default App;
