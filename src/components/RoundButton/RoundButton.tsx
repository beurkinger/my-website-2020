import { h, ComponentChildren, FunctionComponent } from 'preact';

import style from './RoundButton.css';

const themes = {
  default: '',
  billboard: style.billboardTheme,
};

interface Props {
  children: ComponentChildren;
  onClick?: (e: MouseEvent) => void;
  href?: string;
  theme?: keyof typeof themes;
}

const RoundButton: FunctionComponent<Props> = ({
  children,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  href,
  onClick = () => null,
  theme = 'default',
}: Props) => (
  <a
    className={`${style.roundButton} ${themes[theme]}`}
    href={href}
    onClick={onClick}
    rel="noreferrer"
    target="_blank"
  >
    {children}
  </a>
);

export default RoundButton;
