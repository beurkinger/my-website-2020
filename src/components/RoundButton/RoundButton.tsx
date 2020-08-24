import { h, ComponentChildren, FunctionComponent } from 'preact';

import style from './RoundButton.css';

const themes = {
  default: '',
  billboard: style.billboardTheme,
};

interface Props {
  children: ComponentChildren;
  href?: string;
  onClick?: (e: MouseEvent) => void;
  theme?: keyof typeof themes;
}

const RoundButton: FunctionComponent<Props> = ({
  children,
  href = '#',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClick = () => {},
  theme = 'default',
}: Props) => (
  <a
    className={`${style.roundButton} ${themes[theme]}`}
    href={href}
    onClick={onClick}
  >
    {children}
  </a>
);

export default RoundButton;
