import { h, FunctionComponent } from 'preact';

import BillboardAnim from '../BillboardAnim/BillboardAnim';
import BillboardInfo from '../BillboardInfo/BillboardInfo';

import styles from './Billboard.css';

const fillColor = '#0000FF';
const strokeColor = '#FFFFFF';

const Billboard: FunctionComponent = () => (
  <div className={styles.billboard} style={{ backgroundColor: fillColor }}>
    <div className={styles.billboardLeftColumn}>
      <BillboardAnim fillColor={fillColor} strokeColor={strokeColor} />
    </div>
    <div className={styles.billboardRightColumn}>
      <BillboardInfo fillColor={fillColor} strokeColor={strokeColor} />
    </div>
  </div>
);

export default Billboard;
