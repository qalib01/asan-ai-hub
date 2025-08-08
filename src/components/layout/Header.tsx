import React, { useState } from "react";
import { Menu, X, Search } from "lucide-react";

const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        {
            name: 'About us',
            route: '/about'
        },
        {
            name: 'Challenges & startups',
            route: '/challenges'
        },
        {
            name: 'Research',
            route: '/research'
        },
        {
            name: 'Courses',
            route: '/courses'
        },
        {
            name: 'Partners',
            route: '/partners'
        },
        {
            name: 'Media',
            route: '/media'
        },
    ];

    return (
        <header className="w-full bg-white shadow-sm">
            <div className="container mx-auto flex items-center justify-between py-4 px-4">
                {/* Logo */}
                <a
                    className="text-xl font-bold text-purple-500"
                    href={'/'}
                >AI Hub</a>

                {/* Desktop Menu */}
                <nav className="hidden md:flex space-x-6 text-sm font-medium text-black">
                    {navLinks.map((link, idx) => (
                        <a
                            key={idx}
                            href={link.route}
                            className="hover:text-purple-500 transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* Right Buttons */}
                <div className="hidden md:flex items-center space-x-3">
                    <button className="p-2 bg-purple-500 text-white rounded-full">
                        <Search size={16} />
                    </button>
                    <div className="p-2 bg-purple-500 text-white rounded-full text-xs cursor-pointer">
                        EN ▾
                    </div>
                    <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-full text-sm">
                        Get started
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 rounded hover:bg-gray-100"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-white shadow-sm border-t">
                    <nav className="flex flex-col px-4 py-2 space-y-3">
                        {navLinks.map((link, idx) => (
                            <a
                                key={idx}
                                href={link.route}
                                className="hover:text-purple-500 transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}

                        <div className="flex items-center space-x-3 pt-4 border-t">
                            <button className="p-2 bg-purple-500 text-white hover:bg-purple-600 rounded-full cursor-pointer">
                                <Search size={16} />
                            </button>
                            <div className="p-2 bg-purple-500 hover:bg-purple-600 text-white rounded-full text-xs cursor-pointer">
                                EN ▾
                            </div>
                            <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-full text-sm cursor-pointer">
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
