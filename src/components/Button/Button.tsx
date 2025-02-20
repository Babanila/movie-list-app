import { FC, ReactNode } from 'react';
import './Button.css';

type ButtonProps = {
  className: string;
  children: ReactNode;
  onClick: () => void;
  disabled?: boolean;
};

export const Button: FC<ButtonProps> = ({
  onClick,
  children,
  className,
  disabled = false,
}) => {
  return (
    <button
      className={className}
      onClick={disabled ? undefined : onClick}
      style={{
        opacity: disabled ? 0.6 : 1,
        cursor: disabled ? 'not-allowed' : 'pointer',
      }}
    >
      {children}
    </button>
  );
};
