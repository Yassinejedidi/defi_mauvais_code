import React from "react";
import { Provider } from "react-redux";
import Sida from "./Sidaaa";
import sidaAppstore from "./Foret";
import './App.css'


function App() {


  return (
    <div className="App">
      <Provider store={sidaAppstore}>
        <Sida />
      </Provider>


    </div>
  )
};

export default App;