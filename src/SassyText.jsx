export const SassyText = ({ text, uppercase = false }) => {
  const textClassName = [
    uppercase && "uppercase",
    "ml-8",
    "text-secondary",
    "tracking-widest",
    "text-xs",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="flex items-center">
      <div className=" inline-block w-16 h-full border-t border-t-secondary border-t-1 bg-red-400 translate-y-1/2"></div>
      <span className={textClassName}>{text}</span>
    </div>
  );
};
