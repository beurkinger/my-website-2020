import { h, FunctionComponent } from 'preact';
import { useState } from 'preact/hooks';

import EmailIcon from '../EmailIcon/EmailIcon';
import EmailWindow from '../EmailWindow/EmailWindow';
import GitHubIcon from '../GitHubIcon/GitHubIcon';
import LinkedInIcon from '../LinkedInIcon/LinkedInIcon';
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
    window.open('https://www.github.com/beurkinger');
  };
  const onClickLinkedIn = (e: MouseEvent) => {
    e.preventDefault();
    window.open('https://www.linkedin.com/in/thibault-goehringer');
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
        <div className={styles.contactIcon}>
          <RoundButton onClick={onClickEmail} theme="billboard">
            <EmailIcon />
          </RoundButton>
          <div className={styles.contactIconLabel}>Contact</div>
        </div>
        <div className={styles.contactIcon}>
          <RoundButton onClick={onClickGitHub} theme="billboard">
            <GitHubIcon />
          </RoundButton>
          <div className={styles.contactIconLabel}>GitHub</div>
        </div>
        <div className={styles.contactIcon}>
          <RoundButton onClick={onClickLinkedIn} theme="billboard">
            <LinkedInIcon />
          </RoundButton>
          <div className={styles.contactIconLabel}>LinkedIn</div>
        </div>
      </div>
    </div>
  );
};

export default BillboardInfo;
