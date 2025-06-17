import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ClassComponent from './component.js';
import Card from './Card.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ClassComponent first_name = "e"/>
)


function index(){
  return(
    <Card></Card>
  )
}


