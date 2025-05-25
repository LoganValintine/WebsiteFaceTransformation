import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// This turns the H1 into function FunctionComponment
function FunctionComponent(){
  return <h1>This is a function componet</h1>

}

// This turns the H1 into class componment 
class ClassComponent1 extends React.Component{
  render(){
    return <ClassComponent2/>
  }
}

class ClassComponent2 extends React.Component{
  render(){
    return <h1>This is class componet 2</h1>
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ClassComponent1/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
