import { useEffect, useRef, useState } from "react";
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
  const [enter, setEnter] = useState(false);
  const reverse = Number(index) % 2 === 0;
  const applyMarginTop = Number(index) > 1;

  useEffect(() => {
    if (ref && ref.current) {
      const observer = new IntersectionObserver(
        (elements) => {
          if (elements[0].isIntersecting) {
            onStepEnterViewport(Number(index));
            setEnter(true);
          }
        },
        { threshold: 0.7 }
      );

      observer.observe(ref.current);
    }
  }, [ref]);

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 ${
        applyMarginTop ? "mt-32" : "mt-0"
      } 
        transition-opacity duration-500 ${enter ? "opacity-100" : "opacity-0"}
      `}
      ref={ref}
    >
      <div className="container">
        <div
          className={`relative w-2/3 mx-auto md:mx-0 mt-12 ${
            reverse
              ? "translate-x-4 md:translate-x-12"
              : "translate-x-4 md:translate-x-36 lg:translate-x-56 xl:translate-x-72"
          } xl:translate-y-20`}
        >
          <span className="absolute -top-28 -left-20 md:-left-28 text-titan opacity-10">
            {index}
          </span>
          <div>
            <SassyText uppercase text={name} />
            <h3 className="font-serif font-light text-5xl lg:text-6xl mt-6">
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
      <div
        className={`hidden md:block w-3/5 mx-auto ${
          reverse ? "order-first" : "order-last"
        }`}
      >
        <img src={imgSrc} alt={alt} className="object-cover" />
      </div>
    </div>
  );
}
