import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {


  const  [notes , setnotes]=useState([]);
 
 function addNote(newnote){
 
  setnotes(prevnotes =>{
    return  [...prevnotes,newnote];
    
    
  })
 }

  function deleteNote(id){
    setnotes(preNotes => {
      return preNotes.filter((noteitem,index)=>{
        return index !==id;     
       });
    })
  }

  return (
    <div>
      <Header />
      <CreateArea 
      onAdd={addNote}
      />
    {notes.map((noteitems,index) => {
      return  <Note
      key= {index}
      id={index} 
      title={noteitems.title} 
      content={noteitems.content} 
      onDelete={deleteNote} />;   
    })}
      
      <Footer />
    </div>
  );
}

export default App;
