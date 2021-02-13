import './App.css';
import React from 'react'
import { SuccessProvider } from './Components/SuccessContext'
import Main from './Components/Main.jsx'

function App() {

  return (
    <div className="App">
      <header className="App-header">
      <hr className="line top"/>
      <SuccessProvider>
        <Main />
      </SuccessProvider>
      </header>
    </div>
  );
}

export default App;
