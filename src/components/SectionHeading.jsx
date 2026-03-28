export const SectionHeading = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-5 element-fade-in">
      <h2 className="display-5 fw-bold text-primary mb-2">{title}</h2>
      {subtitle && <p className="lead text-muted">{subtitle}</p>}
      <div className="mx-auto mt-3 rounded" style={{ width: '60px', height: '4px', backgroundColor: 'var(--bs-primary)' }}></div>
    </div>
  );
};
