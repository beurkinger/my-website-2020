import { h, FunctionComponent } from 'preact';

import EmailIcon from '../EmailIcon/EmailIcon';
import GitHubIcon from '../GitHubIcon/GitHubIcon';
import Logo from '../Logo/Logo';
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
      <Logo fillColor={strokeColor} />
      <div className={styles.infoDetails}>
        Creative Developer
        <br />
        Paris, France
      </div>
      <div className={styles.contactIcons}>
        <RoundButton url="mailto:thibault.goehringer@gmail.com">
          <EmailIcon fillColor={fillColor} />
        </RoundButton>
        <RoundButton url="https://github.com/beurkinger">
          <GitHubIcon fillColor={fillColor} />
        </RoundButton>
      </div>
    </div>
  );
};

export default BillboardInfo;
