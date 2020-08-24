import { h, FunctionComponent } from 'preact';
import { useState } from 'preact/hooks';

import EmailIcon from '../EmailIcon/EmailIcon';
import EmailWindow from '../EmailWindow/EmailWindow';
import GitHubIcon from '../GitHubIcon/GitHubIcon';
import Logo from '../Logo/Logo';
import RoundButton from '../RoundButton/RoundButton';

import styles from './BillboardInfo.css';

const BillboardInfo: FunctionComponent = () => {
  const [isEmailVisible, setIsEmailVisible] = useState<boolean>(false);

  const onClickEmail = (e: MouseEvent) => {
    e.preventDefault();
    setIsEmailVisible(true);
  };
  const onClickGitHub = (e: MouseEvent) => {
    e.preventDefault();
    window.open('http://www.github.com/beurkinger');
  };
  const onCloseEmail = () => {
    setIsEmailVisible(false);
  };

  return (
    <div className={styles.billboardInfo}>
      {isEmailVisible && <EmailWindow onClose={onCloseEmail} />}
      <Logo />
      <div className={styles.infoDetails}>
        Creative Developer
        <br />
        Paris, France
      </div>
      <div className={styles.contactIcons}>
        <RoundButton onClick={onClickEmail} theme="billboard">
          <EmailIcon />
        </RoundButton>
        <RoundButton onClick={onClickGitHub} theme="billboard">
          <GitHubIcon />
        </RoundButton>
      </div>
    </div>
  );
};

export default BillboardInfo;
