const Button = ({
  children,
  href = "#",
  variant = "primary",
  target,
  rel,
}) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-xl px-7 py-3 font-semibold transition-all duration-300";

  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/30",

    secondary:
      "border border-slate-700 text-white hover:border-blue-500 hover:text-blue-400 hover:-translate-y-1",
  };

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={`${baseClasses} ${variants[variant]}`}
    >
      {children}
    </a>
  );
};

export default Button;