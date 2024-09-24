import ScaryButton from "./buttons/scary-button";
import Logo from "./logo";

const Header = () => {
  return (
    <div className="min-h-[80px] flex items-center bg-gray-800 shadow-lg backdrop-blur-lg backdrop-filter bg-opacity-10 ">
      <div className="container px-2 max-w-7xl  mx-auto flex items-center justify-between">
        <Logo />
        <ul className="list-none items-center gap-x-5 hidden lg:flex">
          <li className="cursor-pointer hover:scale-105 hover:text-red-600 transition">
            Pricing
          </li>
          <li className="cursor-pointer hover:scale-105 hover:text-red-600 transition">
            Examples
          </li>
          <li className="cursor-pointer hover:scale-105 hover:text-red-600 transition">
            Demo
          </li>
        </ul>
        <div className="flex items-center gap-x-2">
          <ScaryButton>Login</ScaryButton>
          {/* <ScaryButton>Log out</ScaryButton> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
