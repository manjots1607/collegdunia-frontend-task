import React, { useEffect } from 'react';
import './App.css';
import CardList from './components/CardList';

function App() {

  return (
    <div className="App">
       <h1 className="p-4 mainH" > Colleges In North India </h1>
       <CardList/>
    </div>
  );
}

export default App;
