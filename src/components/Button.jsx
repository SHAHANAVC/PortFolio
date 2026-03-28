export const Button = ({ children, variant = "primary", className = "", ...props }) => {
  const baseClass = `btn btn-${variant} px-4 py-2 fw-semibold rounded-pill`;
  return (
    <button className={`${baseClass} ${className}`} {...props}>
      {children}
    </button>
  );
};
