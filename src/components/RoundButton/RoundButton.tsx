import { h, ComponentChildren, FunctionComponent } from 'preact';

import style from './RoundButton.css';

interface Props {
  children: ComponentChildren;
  url: string;
}

const RoundButton: FunctionComponent<Props> = ({ children, url }: Props) => (
  <button
    href={url}
    className={style.roundButton}
    target="_blank"
    rel="noreferrer"
  >
    {children}
  </button>
);

export default RoundButton;
