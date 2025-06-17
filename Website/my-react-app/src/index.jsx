import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './card.jsx'


function Index(){
  return(

      <Card />

  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);

export default Index


