import { h, ComponentChildren, FunctionComponent } from 'preact';

import style from './RoundButton.css';

const themes = {
  default: '',
  billboard: style.billboardTheme,
};

interface Props {
  children: ComponentChildren;
  onClick?: (e: MouseEvent) => void;
  theme?: keyof typeof themes;
}

const RoundButton: FunctionComponent<Props> = ({
  children,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClick = () => {},
  theme = 'default',
}: Props) => (
  <button className={`${style.roundButton} ${themes[theme]}`} onClick={onClick}>
    {children}
  </button>
);

export default RoundButton;
