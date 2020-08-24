import { h, FunctionComponent } from 'preact';

import theme from '../../theme/theme';

import useDelay from '../../hooks/useDelay';

import Hello from '../Hello/Hello';
import Sun from '../Sun/Sun';
import World from '../World/World';

import styles from './BillboardAnim.css';

const BillboardAnim: FunctionComponent = () => {
  const isSunVisible = useDelay(1250);

  return (
    <div className={styles.ratioBox}>
      <div className={styles.ratioBoxContent}>
        <Hello />
        {isSunVisible && (
          <Sun
            backgroundColor={theme.colors.main1}
            strokeColor={theme.colors.main2}
          />
        )}
        <World />
      </div>
    </div>
  );
};

export default BillboardAnim;
