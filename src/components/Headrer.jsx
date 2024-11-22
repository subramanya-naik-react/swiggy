import { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { CiDiscount1 } from "react-icons/ci";
import { IoIosHelpCircle } from "react-icons/io";
import { FaOpencart } from "react-icons/fa6";
import { FaSignInAlt } from "react-icons/fa";

const Headrer = () => {
    const [toggle, setToggle] = useState(false);

    const showSidemenu = () => {
        setToggle(true);
    };
    const hideSidemenu = () => {
        setToggle(false);
    };

    const links = [
        { icon: <IoIosSearch />, name: "Search" },
        { icon: <CiDiscount1 />, name: "Offer", new: "New" },
        { icon: <IoIosHelpCircle />, name: "Help" },
        { icon: <FaSignInAlt />, name: "Sign-In" },
        { icon: <FaOpencart />, name: "Cart" }
    ];

    return (
        <>
            {/* Sidebar */}
            <div
                className="inset-0 black-overlay w-full h-full fixed duration-700"
                onClick={hideSidemenu}
                style={{
                    opacity: toggle ? 1 : 0,
                    visibility: toggle ? "visible" : "hidden",
                    zIndex: 999999999999,
                }}
            >
                <div
                    className="inset-0 w-[300px] bg-white h-full absolute duration-[800ms] rounded-lg"
                    onClick={(e) => e.stopPropagation()}
                    style={{
                        left: toggle ? "0%" : "-100%",
                    }}
                >
                    <h1 className="mt-5 ml-3 font-serif text-[30px] text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-500">
                        Hi! Welcome
                    </h1>
                    <div className="border border-orange-300 p-3">
                        <p className="mt-5 text-[30px] text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-500 font-medium">
                            About project:
                        </p>
                        <p className="mt-2 font-serif text-[17px] mb-4">
                            Built a clone of Swiggy, replicating real-world app functionality with a focus on seamless user experience.
                        </p>
                    </div>
                    <div>
                        <h1 className="mt-5 ml-3 font-serif text-[30px] text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-500">
                            Hey! Thank you for visiting.
                        </h1>
                        <p className="bg-orange-500 h-[1px] mt-4"></p>
                    </div>
                    <footer className="mt-5 text-center">Made for PC</footer>
                </div>
            </div>

            {/* Header */}
            <header className="p-[15px] shadow-xl bg-fixed">
                <div className="max-w-[1200px] mx-auto flex items-center justify-between">
                    {/* Logo */}
                    <div className="w-[30px] border">
                        <img src="swiggy.png" alt="Swiggy" className="w-full" />
                    </div>

                    {/* Location */}
                    <div className="p-2 hidden sm:flex items-center">
                        <span className="border-b-[3px] font-bold border-[#e31a1a]">Karnataka</span> UK, India
                        <RxCaretDown onClick={showSidemenu} fontSize={25} className="inline text-[#fc8019] cursor-pointer" />
                    </div>

                    {/* Nav Links */}
                    <nav className="hidden sm:flex list-none gap-6 ml-auto font-semibold text-[18px] mr-2">
                        {links.map((link, index) => (
                            <li
                                className="flex items-center gap-2 hover:text-[#fc8019] hover:animate-pulse cursor-pointer"
                                key={index}
                            >
                                {link.icon}
                                {link.name}
                                {link.new && <sup className="text-[#fc8019]"> {link.new}</sup>}
                            </li>
                        ))}
                    </nav>

                    {/* Mobile Menu Icon */}
                    <div className="sm:hidden cursor-pointer text-[#fc8019]" onClick={showSidemenu}>
                        <RxCaretDown fontSize={25} />
                    </div>
                </div>
            </header>
        </>
    );
};

export default Headrer;
