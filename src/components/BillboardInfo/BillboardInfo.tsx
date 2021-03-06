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
      <div className={styles.infoHeader}>
        <div className={styles.spot} />
        <Logo />
        <div className={styles.infoDetails}>
          Creative Developer
          <br />
          Paris, France
        </div>
      </div>
      <div className={styles.contactIcons}>
        <RoundButton onClick={onClickEmail} theme="billboard">
          <EmailIcon />
        </RoundButton>
        <RoundButton href="https://www.github.com/beurkinger" theme="billboard">
          <GitHubIcon />
        </RoundButton>
        <RoundButton
          href="https://www.linkedin.com/in/thibault-goehringer"
          theme="billboard"
        >
          <LinkedInIcon />
        </RoundButton>
      </div>
    </div>
  );
};

export default BillboardInfo;
