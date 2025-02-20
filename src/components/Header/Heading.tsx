import { CSSProperties, ReactNode } from 'react';
import './Heading.css';

type HeadingProps = {
  children: ReactNode;
  level: number;
  style?: CSSProperties;
};

export function Heading({ level, children, style = {} }: HeadingProps) {
  switch (level) {
    case 1:
      return <h1 style={style}>{children}</h1>;
    case 2:
      return <h2 style={style}>{children}</h2>;
    case 3:
      return <h3 style={style}>{children}</h3>;
    case 4:
      return <h4 style={style}>{children}</h4>;
    case 5:
      return <h5 style={style}>{children}</h5>;
    case 6:
      return <h6 style={style}>{children}</h6>;
    default:
      throw Error('Unknown level: ' + level);
  }
}
