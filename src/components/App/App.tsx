import { h, FunctionComponent } from 'preact';

import Sun from '../Sun/Sun';
import Hello from '../Hello/Hello';
import World from '../World/World';

import './App.css';

const fillColor = '#0000FF';
const strokeColor = '#FFFFFF';

const App: FunctionComponent = () => (
  <div id="app" style={{ backgroundColor: fillColor }}>
    <div className="sun-wrapper" style={{ borderColor: strokeColor }}>
      <Hello fillColor={fillColor} strokeColor={strokeColor} />
      <Sun
        backgroundColor={fillColor}
        height={520}
        maxRaysLength={400}
        nbRays={125}
        strokeColor={strokeColor}
        sunRadius={50}
        width={520}
      />
      <World fillColor={fillColor} strokeColor={strokeColor} />
    </div>
  </div>
);

export default App;
