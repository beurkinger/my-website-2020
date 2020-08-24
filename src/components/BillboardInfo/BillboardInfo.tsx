import { h, FunctionComponent } from 'preact';
import { useState } from 'preact/hooks';

import EmailIcon from '../EmailIcon/EmailIcon';
import EmailWindow from '../EmailWindow/EmailWindow';
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
  const [isEmailVisible, setIsEmailVisible] = useState<boolean>(false);

  const onClickEmail = (e: MouseEvent) => {
    e.preventDefault();
    setIsEmailVisible(true);
    // window.open('mailto:thibault.goehringer@gmail.com');
  };
  const onClickGitHub = (e: MouseEvent) => {
    e.preventDefault();
    window.open('http://www.github.com');
  };
  const onCloseEmail = () => {
    setIsEmailVisible(false);
  };

  return (
    <div className={styles.billboardInfo}>
      {isEmailVisible && <EmailWindow onClose={onCloseEmail} />}
      <Logo fillColor={strokeColor} />
      <div className={styles.infoDetails}>
        Creative Developer
        <br />
        Paris, France
      </div>
      <div className={styles.contactIcons}>
        <RoundButton onClick={onClickEmail}>
          <EmailIcon fillColor={fillColor} />
        </RoundButton>
        <RoundButton onClick={onClickGitHub}>
          <GitHubIcon fillColor={fillColor} />
        </RoundButton>
      </div>
    </div>
  );
};

export default BillboardInfo;
