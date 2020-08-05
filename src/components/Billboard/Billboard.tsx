import { h, FunctionComponent } from 'preact';

import useDelay from '../../hooks/useDelay';
import GitHubIcon from '../GitHubIcon/GitHubIcon';
import Hello from '../Hello/Hello';
import Name from '../Name/Name';
import RoundButton from '../RoundButton/RoundButton';
import Sun from '../Sun/Sun';
import World from '../World/World';

import styles from './Billboard.css';

const fillColor = '#0000FF';
const strokeColor = '#FFFFFF';

const Billboard: FunctionComponent = () => {
  const isSunVisible = useDelay(1250);

  return (
    <div className={styles.billboard} style={{ backgroundColor: fillColor }}>
      <div className={styles.billboardLeftColumn}>
        <div className={styles.ratioBox} style={{ borderColor: strokeColor }}>
          <div className={styles.ratioBoxContent}>
            <Hello fillColor={fillColor} strokeColor={strokeColor} />
            {isSunVisible && (
              <Sun backgroundColor={fillColor} strokeColor={strokeColor} />
            )}
            <World fillColor={fillColor} strokeColor={strokeColor} />
          </div>
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
          <div className={styles.contactIcons}>
            <RoundButton url="mailto:thibault.goehringer@gmail.com">
              @
            </RoundButton>
            <RoundButton url="https://github.com/beurkinger">
              <GitHubIcon fillColor={fillColor} />
            </RoundButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
