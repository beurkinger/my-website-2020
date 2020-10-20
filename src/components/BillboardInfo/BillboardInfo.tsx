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
  const onCloseEmail = () => {
    setIsEmailVisible(false);
  };

  return (
    <div className={styles.billboardInfo}>
      {isEmailVisible && <EmailWindow onClose={onCloseEmail} />}
      <div className={styles.infoSpaceTop}>
        <Logo />
      </div>
      <div className={styles.infoSpaceBottom}>
        <div className={styles.infoDetails}>
          Creative Developer
          <br />
          Paris, France
        </div>
      </div>
      <div className={styles.contactIcons}>
        <div className={styles.contactIcon}>
          <RoundButton onClick={onClickEmail} theme="billboard">
            <EmailIcon />
            <div className={styles.contactIconLabel}>Contact</div>
          </RoundButton>
        </div>
        <div className={styles.contactIcon}>
          <RoundButton
            href="https://www.github.com/beurkinger"
            theme="billboard"
          >
            <GitHubIcon />
            <div className={styles.contactIconLabel}>GitHub</div>
          </RoundButton>
        </div>
        <div className={styles.contactIcon}>
          <RoundButton
            href="https://www.linkedin.com/in/thibault-goehringer"
            theme="billboard"
          >
            <LinkedInIcon />
            <div className={styles.contactIconLabel}>LinkedIn</div>
          </RoundButton>
        </div>
      </div>
    </div>
  );
};

export default BillboardInfo;
