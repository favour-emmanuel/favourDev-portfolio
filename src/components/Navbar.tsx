import { Icon } from "@iconify/react/dist/iconify.js";

const Navbar = () => {
  return (
    <div className="">
      <div className="w-full lg:flex justify-between items-center">
        <a href="/">
          Favour <span>Emma</span>
        </a>
        <ul>
          <li>Home</li>
        </ul>
        <div>
          <span>
            <Icon icon="ph:sun" />
          </span>
          <span>
            <Icon icon="ri:moon-fill" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
