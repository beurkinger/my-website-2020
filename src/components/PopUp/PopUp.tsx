import { h, ComponentChildren, FunctionComponent } from 'preact';

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
    <button className={style.popUpCloseButton} onClick={onClose}>
      X
    </button>
    <div className={style.popUpContent}>{children}</div>
  </div>
);

export default PopUp;
