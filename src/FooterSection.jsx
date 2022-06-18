export function FooterSection() {
  return (
    <div className="grid grid-cols-10 mt-48">
      <div className="col-span-6 pl-28">
        <p className="font-serif text-4xl">MNTN</p>
        <p className="mt-6 w-1/2 2xl:w-1/3">
          Get out there & discover your next slope, mountain & destination!
        </p>
      </div>
      <ul className="col-span-2 space-y-4">
        <p className="text-secondary text-xl">More on the blog</p>
        <li>About MNTN</li>
        <li>Contributors & Writers</li>
        <li>Write For Us</li>
        <li>Contact Us</li>
        <li>Privacy Policy</li>
      </ul>
      <ul className="col-span-2 space-y-4">
        <p className="text-secondary text-xl">More on MNTN</p>
        <li>The team</li>
        <li>Jobs</li>
        <li>Press</li>
      </ul>
    </div>
  );
}
