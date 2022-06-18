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
      <div className=" inline-block w-16 border-t border-t-secondary border-t-1"></div>
      <span className={textClassName}>{text}</span>
    </div>
  );
};
