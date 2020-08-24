import { h, ComponentChildren, FunctionComponent } from 'preact';

import CloseIcon from '../CloseIcon/CloseIcon';
import RoundButton from '../RoundButton/RoundButton';

import style from './PopUp.css';

interface Props {
  children: ComponentChildren;
  onClose: () => void;
}

const PopUp: FunctionComponent<Props> = ({
  children,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClose = () => {},
}: Props) => (
  <div className={style.popUp}>
    <div className={style.popUpCloseButton}>
      <RoundButton onClick={onClose}>
        <CloseIcon />
      </RoundButton>
    </div>
    <div className={style.popUpContent}>{children}</div>
  </div>
);

export default PopUp;
