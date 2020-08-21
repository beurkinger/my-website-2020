import { h, FunctionComponent } from 'preact';

import AtIcon from '../AtIcon/AtIcon';
import GitHubIcon from '../GitHubIcon/GitHubIcon';
import Name from '../Name/Name';
import RoundButton from '../RoundButton/RoundButton';

import styles from './BillboardInfo.css';

interface Props {
  fillColor: string;
  strokeColor: string;
}

const BillboardInfo: FunctionComponent<Props> = ({
  fillColor,
  strokeColor,
}: Props) => {
  return (
    <div className={styles.billboardInfo}>
      <Name fillColor={strokeColor} />
      <div className={styles.infoDetails}>
        Creative Developer
        <br />
        Paris, France
      </div>
      <div className={styles.contactIcons}>
        <RoundButton url="mailto:thibault.goehringer@gmail.com">
          <AtIcon fillColor={fillColor} />
        </RoundButton>
        <RoundButton url="https://github.com/beurkinger">
          <GitHubIcon fillColor={fillColor} />
        </RoundButton>
      </div>
    </div>
  );
};

export default BillboardInfo;
