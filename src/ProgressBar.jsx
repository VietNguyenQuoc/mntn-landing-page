export function ProgressBar({ stepLabels = [], activeIdx = 0 }) {
  return (
    <div className="hidden md:block col-span-1 text-right fixed right-0 z-10">
      {stepLabels.map((label, idx) => {
        const isActive = idx === activeIdx;

        return (
          <div
            key={label}
            className={`pr-6 py-3 border-r-3 mr-8 ${
              isActive ? "border-r-white" : "border-r-white/25"
            } transition duration-200`}
          >
            {label}
          </div>
        );
      })}
    </div>
  );
}
