const variants = {
  primary: 'btn__primary',
  secondary: 'btn__secondary',
  danger: 'btn__disabled',
};

const sizes = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
};

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  disabled?: boolean;
};

export const Button = ({
  children,
  type = 'button',
  className = '',
  variant = 'primary',
  disabled = false,
  size = 'lg',
  ...rest
}: ButtonProps) => {
  const buttonClasses = `btn ${variants[variant]} ${sizes[size]} ${className || ''}`;

  return (
    <button disabled={disabled} type={type} className={buttonClasses} {...rest}>
      {children}
    </button>
  );
};
