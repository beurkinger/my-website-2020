import { h, ComponentChildren, FunctionComponent } from 'preact';

import style from './RoundButton.css';

interface Props {
  children: ComponentChildren;
  href?: string;
  onClick?: (e: MouseEvent) => void;
}

const RoundButton: FunctionComponent<Props> = ({
  children,
  href = '#',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClick = () => {},
}: Props) => (
  <a className={style.roundButton} href={href} onClick={onClick}>
    {children}
  </a>
);

export default RoundButton;
