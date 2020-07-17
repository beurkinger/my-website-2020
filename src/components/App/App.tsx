import { h, FunctionComponent } from 'preact';

import Billboard from '../Billboard/Billboard';
import styles from './App.css';

const App: FunctionComponent = () => (
  <div className={styles.app}>
    <Billboard />
  </div>
);

export default App;
