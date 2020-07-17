import { h, FunctionComponent } from 'preact';

import Hello from '../Hello/Hello';
import Name from '../Name/Name';
import Sun from '../Sun/Sun';
import World from '../World/World';

import styles from './Billboard.css';

const fillColor = '#0000FF';
const strokeColor = '#FFFFFF';

const Billboard: FunctionComponent = () => (
  <div className={styles.billboard} style={{ backgroundColor: fillColor }}>
    <div className={styles.billboardLeftColumn}>
      <div className={styles.sunWrapper} style={{ borderColor: strokeColor }}>
        <Hello fillColor={fillColor} strokeColor={strokeColor} />
        <Sun
          backgroundColor={fillColor}
          maxRaysLength={400}
          nbRays={125}
          strokeColor={strokeColor}
          sunRadius={50}
        />
        <World fillColor={fillColor} strokeColor={strokeColor} />
      </div>
    </div>
    <div className={styles.billboardRightColumn}>
      <div className={styles.info}>
        <Name fillColor={strokeColor} />
        <div className={styles.infoDetails}>
          Creative Developer
          <br />
          Paris, France
        </div>
      </div>
    </div>
  </div>
);

export default Billboard;
