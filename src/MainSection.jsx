import { Step } from "./Step";

export function MainSection({ steps, onStepEnterViewport }) {
  return (
    <main className="relative -top-36">
      {steps.map((stepProp) => (
        <Step
          key={stepProp.index}
          {...stepProp}
          onStepEnterViewport={onStepEnterViewport}
        />
      ))}
    </main>
  );
}
