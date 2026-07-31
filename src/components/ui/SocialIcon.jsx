const SocialIcon = ({
  href,
  icon,
  label,
  target = "_blank",
  rel = "noopener noreferrer",
}) => {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      aria-label={label}
      className="text-3xl text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:text-blue-500"
    >
      {icon}
    </a>
  );
};

export default SocialIcon;