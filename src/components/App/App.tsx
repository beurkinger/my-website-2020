import { h, FunctionComponent } from 'preact';

import Sun from '../Sun/Sun';
import Hello from '../Hello/Hello';
import World from '../World/World';
// import Sun from '../Sun/SunSVG';

import './App.css';

const App: FunctionComponent = () => (
  <div id="app">
    <div className="sun-wrapper">
      <Hello/>
      <Sun 
        backgroundColor="transparent"
        height={520}
        maxRaysLength={400} 
        nbRays={125} 
        strokeColor="#FFFFFF"
        sunRadius={50} 
        width={520}
      />
      <World/>
    </div>
  </div>
);

export default App;
