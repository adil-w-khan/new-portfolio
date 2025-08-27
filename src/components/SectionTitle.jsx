const SectionTitle = ({ title, subtitle, className = "" }) => {
  return (
    <div className={`mb-6 text-center sm:text-left ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
      {subtitle && (
        <p className="mt-1 text-gray-400 text-sm md:text-base">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionTitle;
