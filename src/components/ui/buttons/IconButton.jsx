export default function IconButton({
  children,
  type = 'button',
  disabled = false,
  onClick,
  className = '',
  title,
  ...rest
}) {
  return (
    <button
      type={type}
      className={`btn-icon ${className}`.trim()}
      disabled={disabled}
      onClick={onClick}
      title={title}
      {...rest}
    >
      {children}
    </button>
  );
}
