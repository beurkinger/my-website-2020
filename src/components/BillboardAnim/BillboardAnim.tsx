import { h, FunctionComponent } from 'preact';

import useDelay from '../../hooks/useDelay';
import Hello from '../Hello/Hello';
import Sun from '../Sun/Sun';
import World from '../World/World';

import styles from './BillboardAnim.css';

interface Props {
  fillColor: string;
  strokeColor: string;
}

const BillboardAnim: FunctionComponent<Props> = ({
  fillColor,
  strokeColor,
}: Props) => {
  const isSunVisible = useDelay(1250);

  return (
    <div className={styles.ratioBox} style={{ borderColor: strokeColor }}>
      <div className={styles.ratioBoxContent}>
        <Hello fillColor={fillColor} strokeColor={strokeColor} />
        {isSunVisible && (
          <Sun backgroundColor={fillColor} strokeColor={strokeColor} />
        )}
        <World fillColor={fillColor} strokeColor={strokeColor} />
      </div>
    </div>
  );
};

export default BillboardAnim;
