import './App.css';
import React from 'react';
import {ModalProvider} from "./pages/modalPaages/ModalContext";
import Main from "./pages/main/Main";
import InputForm from "./componets/input/InputFrom";
import About from "./pages/about/About";

function App() {
  return (
    <div className="App">
      <ModalProvider>
          <div className="light-theme">
              <Main />
              <About />
          </div>
      </ModalProvider>
    </div>
  );
}

export default App;
