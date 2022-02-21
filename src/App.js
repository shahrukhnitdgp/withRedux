import React from 'react'
import './App.css';
import {FormParent} from '../src/components/FormParent'
import {ViewComponent} from '../src/components/ViewComponent'


function App() {

  return (
    <div style={{display:'flex',flexDirection:"row",height:'100vh',width:'90vw'}}>
      <div style={{display:'flex',flexDirection:"column"}} ><FormParent /></div>
      <div><ViewComponent /></div>
    </div>
  );
}

export default App;
