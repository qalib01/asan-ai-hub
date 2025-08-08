import React, { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import { navLinks } from "./headerData";

const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [langMenuOpen, setLangMenuOpen] = useState(false);

    return (
        <header className="mx-8">
            <div className="containex flex items-center justify-between py-10">
                <a
                    className="text-[40px] font-bold text-violet-500"
                    href={'/'}
                >AI Hub</a>

                <nav className="hidden md:flex space-x-6 text-base font-medium text-black">
                    {navLinks.map((link, idx) => (
                        <a
                            key={idx}
                            href={link.route}
                            className="hover:text-violet-500 font-bolder transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                <div className="hidden md:flex items-center space-x-3">
                    <button className="p-4 bg-violet-500 text-white rounded-full cursor-pointer">
                        <Search size={16} />
                    </button>
                    <div onClick={() => setLangMenuOpen(!langMenuOpen)} className="p-3 bg-violet-500 text-white rounded-full text-base cursor-pointer">
                        EN ▾
                    </div>
                    <button className="bg-violet-500 hover:bg-violet-600 text-white px-4 py-3 rounded-full text-base cursor-pointer">
                        Get started
                    </button>
                </div>

                <button
                    className="md:hidden p-2 rounded hover:bg-gray-100"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {menuOpen && (
                <div className="md:hidden bg-white shadow-sm">
                    <nav className="flex flex-col px-4 py-2 space-y-3">
                        {navLinks.map((link, idx) => (
                            <a
                                key={idx}
                                href={link.route}
                                className="hover:text-violet-500 transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}

                        <div className="flex items-center space-x-3 pt-4">
                            <button className="p-4 bg-violet-500 text-white hover:bg-violet-600 rounded-full cursor-pointer">
                                <Search size={16} />
                            </button>
                            <div className="p-2 bg-violet-500 hover:bg-violet-600 text-white rounded-full text-xs cursor-pointer">
                                EN ▾
                            </div>
                            <button className="bg-violet-500 hover:bg-violet-600 text-white px-4 py-2 rounded-full text-sm cursor-pointer">
                                Get started
                            </button>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
