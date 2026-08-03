export default function PrimaryButton({
  children,
  type = 'button',
  disabled = false,
  onClick,
  className = '',
  ...rest
}) {
  return (
    <button
      type={type}
      className={`btn-primary ${className}`.trim()}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}
