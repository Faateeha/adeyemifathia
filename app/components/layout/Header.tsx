import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import Link from "next/link";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
    // Toggle body scroll lock
    if (!nav) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
    }
  };

  const handleLinkClick = () => {
    setNav(false); // Close the navigation menu when a link is clicked
    document.body.style.overflow = "auto"; // Enable scrolling
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white relative">
      <Link smooth to={"#home"}>
        <h1 className="w-full text-3xl font-bold hover:text-[#819096]">Portfolio.</h1>
      </Link>
      {/* Desktop view */}
      <ul className="hidden md:flex">
        <li className="p-4 hover:text-[#819096]">
          <Link smooth to={"#home"}>
            Home
          </Link>
        </li>
        <li className="p-4 hover:text-[#819096]">
          <Link smooth to={"#about"}>
            About
          </Link>
        </li>
        <li className="p-4 hover:text-[#819096]">
          <Link smooth to={"#skills"}>
            Skills
          </Link>
        </li>
        <li className="p-4 hover:text-[#819096]">
          <Link smooth to={"#projects"}>
            Projects
          </Link>
        </li>
        <li className="p-4 hover:text-[#819096]">
          <Link smooth to={"#contact"}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Mobile view */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      {/* Overlay to prevent content interaction */}
      {nav && (
        <div className="fixed inset-0 bg-black opacity-50 z-50" onClick={handleNav}></div>
      )}
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 z-50"
            : "fixed left-[-100%] z-50"
        }
      >
        <h1 className="w-full text-3xl font-bold m-4 hover:text-[#819096]">Portfolio.</h1>
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-600 hover:text-[#819096]">
            <Link smooth to={"#home"} onClick={handleLinkClick}>Home</Link>
          </li>
          <li className="p-4 border-b border-gray-600 hover:text-[#819096]">
            <Link smooth to={"#about"} onClick={handleLinkClick}>About</Link>
          </li>
          <li className="p-4 border-b border-gray-600 hover:text-[#819096]">
            <Link smooth to={"#skills"} onClick={handleLinkClick}>Skills</Link>
          </li>
          <li className="p-4 border-b border-gray-600 hover:text-[#819096]">
            <Link smooth to={"#projects"} onClick={handleLinkClick}>Projects</Link>
          </li>
          <li className="p-4 hover:text-[#819096]">
            <Link smooth to={"#contact"} onClick={handleLinkClick}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
