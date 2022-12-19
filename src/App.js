import React, {useState} from 'react';
import './App.css';

function App() {
    const  [off, setOff] =  useState(true)
    console.log(off)
  return (

    <main className={off === true ? "off" : "on"}>
      <section>
        <div className="dot"></div>
        {off ? <h1>The button is on</h1> :
            <h1>The button is off</h1>}
        <button
            disabled={off === false}
            type="button"
            onClick={() => setOff(false)}>
          Turn on/off
        </button>
      </section>
    </main>
  );
}

export default App;
