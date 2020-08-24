import { h, FunctionComponent } from 'preact';

import PopUp from '../PopUp/PopUp';

import style from './EmailWindow.css';

interface Props {
  onClose: () => void;
}

const base64_1 = 'dGhpYmF1bHQuZ29laHJpbmdlcg==';
const base64_2 = 'QGdtYWlsLmNvbQ==';

const EmailWindow: FunctionComponent<Props> = ({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClose = () => {},
}: Props) => (
  <PopUp onClose={onClose}>
    <div className={style.emailWindow}>
      <p>
        For any inquiry, please shoot me an email at{' '}
        <a href={`mailto:${atob(base64_1)}${atob(base64_2)}`}>
          {`${atob(base64_1)}${atob(base64_2)}`}
        </a>
      </p>
    </div>
  </PopUp>
);

export default EmailWindow;
