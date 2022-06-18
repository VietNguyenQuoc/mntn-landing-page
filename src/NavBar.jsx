const NavBar = () => {
  return (
    <nav className="grid grid-cols-12 p-8 items-center bg-gradient-to-b from-theme">
      <div className="col-span-2 font-serif text-3xl">MNTN</div>
      <ul className="col-span-8 flex gap-8 justify-center">
        <li>
          <a href="#">Equipment</a>
        </li>
        <li>
          <a href="#">About us</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
      </ul>
      <a className="col-span-2 font-extralight flex justify-self-end cursor-pointer">
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <span className="ml-2">Account</span>
      </a>
    </nav>
  );
};

export default NavBar;
