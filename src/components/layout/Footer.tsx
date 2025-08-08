import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";
import { footerLinks, socialLinks } from "./footerData";
import type { JSX } from "react";
// import { MdEmail } from "react-icons/md";
// import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";

const iconMap: Record<string, JSX.Element> = {
    MdEmail: <Mail />,
    FaLinkedinIn: <Linkedin />,
    FaFacebookF: <Facebook />,
    FaInstagram: <Instagram />
};

export default function Footer() {
    return (
        <footer className="">
            <div className="mx-8 px-4 py-10 bg-[#ECEFF3] rounded-4xl">
                {/* Top */}
                <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
                    {/* Logo */}
                    <div className="col-span-2 md:col-span-1">
                        <h2 className="text-2xl font-bold text-purple-500">AI Hub</h2>
                    </div>

                    {/* Links */}
                    {footerLinks.map((section) => (
                        <div key={section.title}>
                            <h3 className="font-semibold mb-3">{section.title}</h3>
                            <ul className="space-y-1">
                                {section.links.map((link) => (
                                    <li
                                        key={link}
                                        className="text-gray-600 hover:text-purple-500 transition"
                                    >
                                        <a href="#">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    <div className="flex w-full">
                        <div className="flex items-center gap-4 mt-4 md:mt-0">
                            {socialLinks.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.url}
                                    className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-100 text-purple-500 hover:bg-purple-500 hover:text-white transition"
                                >
                                    {iconMap[item.icon]}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="flex flex-col md:flex-row items-center justify-between mt-10 border-t border-gray-200 pt-6">
                    <p className="text-sm text-gray-500">
                        © 2025 ASAN AI HUB. All rights reserved.
                    </p>
                    <a href="#" className="text-sm text-gray-600 hover:text-purple-500">
                        Terms of Services
                    </a>
                </div>
            </div>
        </footer>
    );
}
