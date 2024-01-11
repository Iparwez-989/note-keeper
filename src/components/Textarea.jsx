import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';

function Textarea(props) {
    const [note,setNote]= useState({
        title:"",
        content:""
    })
function handleChange(event){
    const {name,value} = event.target;
    setNote(function(prevNote){
        return {
            ...prevNote,
            [name]:value
            
        }
    })
}
function handleClick(event){
    props.onAdd(note)
    event.preventDefault()
    setNote({
      title:"",
      content:""
    })
}
        

  return (
    <div>
      <form>
        <input name="title" onChange={handleChange} value={note.title}  placeholder="Enter your title" />
        <textarea name="content" onChange={handleChange} value={note.content} placeholder="Enter your note" rows="3" />
        <button onClick={handleClick}><AddIcon/></button>
      </form>
    </div>
  );
}

export default Textarea;
