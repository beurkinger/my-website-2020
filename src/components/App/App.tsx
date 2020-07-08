import { h, FunctionComponent } from 'preact';

import Sun from '../Sun/Sun';
// import Sun from '../Sun/SunSVG';

import './App.css';

const App: FunctionComponent = () => (
  <div id="app">
    <h1>HELLO MY DEAR</h1>
    <Sun 
      backgroundColor="transparent"
      height={520}
      maxRaysLength={400} 
      nbRays={125} 
      strokeColor="#FFFFFF"
      sunRadius={50} 
      width={520}
    />
  </div>
);

export default App;
