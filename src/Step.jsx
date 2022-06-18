import { useEffect, useMemo, useRef } from "react";
import { SassyText } from "./SassyText";

export function Step({
  index,
  name,
  headingText,
  bodyText,
  imgSrc,
  alt,
  onStepEnterViewport,
}) {
  const ref = useRef();
  const reverse = Number(index) % 2 === 0;
  const applyMarginTop = Number(index) > 1;

  useEffect(() => {
    if (ref && ref.current) {
      const observer = new IntersectionObserver(
        (elements) => {
          if (elements[0].isIntersecting) {
            onStepEnterViewport(Number(index));
          }
        },
        { threshold: 0.7 }
      );

      observer.observe(ref.current);
    }
  }, [ref]);

  return (
    <div className={`grid grid-cols-2 ${applyMarginTop && "mt-32"}`} ref={ref}>
      <div>
        <div
          className={`relative mt-12 ${
            reverse ? "translate-x-12" : "translate-x-72"
          } translate-y-20`}
        >
          <span className="absolute -top-28 -left-28 text-titan opacity-10">
            {index}
          </span>
          <div className="w-2/3">
            <SassyText uppercase text={name} />
            <h3 className="font-serif font-light text-6xl mt-6">
              {headingText}
            </h3>
            <p className="mt-6">{bodyText}</p>
            <span className="inline-block text-secondary mt-6">
              read more →
            </span>
          </div>
        </div>
      </div>

      {/* Image goes here */}
      <div className={`w-2/3 mx-auto ${reverse ? "order-first" : ""}`}>
        <img src={imgSrc} alt={alt} className="object-cover" />
      </div>
    </div>
  );
}
