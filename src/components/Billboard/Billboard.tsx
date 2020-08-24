import { h, FunctionComponent } from 'preact';

import BillboardAnim from '../BillboardAnim/BillboardAnim';
import BillboardInfo from '../BillboardInfo/BillboardInfo';

import styles from './Billboard.css';

const Billboard: FunctionComponent = () => (
  <div className={styles.billboard}>
    <div className={styles.billboardLeftColumn}>
      <BillboardAnim />
    </div>
    <div className={styles.billboardRightColumn}>
      <BillboardInfo />
    </div>
  </div>
);

export default Billboard;
