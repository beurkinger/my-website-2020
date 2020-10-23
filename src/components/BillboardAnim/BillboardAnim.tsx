import { h, FunctionComponent } from 'preact';

import useDelay from '../../hooks/useDelay';

import Hello from '../Hello/Hello';
import Sun from '../Sun/Sun';
import World from '../World/World';

import styles from './BillboardAnim.css';

const BillboardAnim: FunctionComponent = () => {
  const isSunVisible = useDelay(1300);

  return (
    <div className={styles.ratioBox}>
      <div className={styles.ratioBoxContent}>
        <Hello />
        {isSunVisible && <Sun strokeColor="#FFFFFF" />}
        <World />
      </div>
    </div>
  );
};

export default BillboardAnim;
