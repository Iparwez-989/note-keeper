import Header from "./components/Header";
import Footer from "./components/Footer"
import Note from "./components/Note";
// import notes from "./notes";
import Textarea from "./components/Textarea";
import { useState } from "react";

function App() {
  const [notes,setNotes]= useState([])
  function deleteNote(id){
    console.log('delete is triggered' );
    console.log(id);
    setNotes(prevNote=>{
      console.log(prevNote);
     return prevNote.filter((noteItem,index)=>{
          return index !== id
          
      })
      
    })
  }

  function addNote(note){
    console.log(note);
    setNotes(prevNote=>{
      return [...prevNote,note]
      
    })
  }
  return (
   <>
   <Header />
    <Textarea onAdd={addNote}/>
   
    {notes.map((noteItem,index)=>{
    return <Note 
        key={index}
        id={index}
        title={noteItem.title}
        para = {noteItem.content}
        onDelete={deleteNote} />

})}
  
   <Footer />
   </>
  );
}

export default App;
