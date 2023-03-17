import './App.css';
import Main from './pages/Main';
import Begin from './pages/Begin';
import React, { useState } from 'react';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

const Context = React.createContext();

function App() {
  const [score, setScore] = useState(0);
  return (
    <Context.Provider value = {{
      counter: [score, setScore],
      pickColor: pickColor
    }}>
      <BrowserRouter>
        <Routes>
          <Route path="/begin" element={<Begin/>}/>
          <Route path="/" element={<Main/>}/>
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}

function pickColor() {

}

export {Context}
export default App;
