import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";
import { footerLinks, socialLinks } from "./footerData";
import type { JSX } from "react";


const iconMap: Record<string, JSX.Element> = {
    MdEmail: <Mail size={24} />,
    FaLinkedinIn: <Linkedin size={24} />,
    FaFacebookF: <Facebook size={24} />,
    FaInstagram: <Instagram size={24} />,
};

export default function Footer() {
    return (
        <footer className="my-8">
            <div className="mx-8 px-8 py-10 bg-[#ECEFF3] rounded-4xl">
                {/* Top */}
                <div className="grid grid-cols-2 md:grid-cols-6 gap-8 w-full">
                    {/* Logo */}
                    <div className="col-span-2 md:col-span-1">
                        <h2 className="text-4xl font-bold text-violet-500">AI Hub</h2>
                    </div>

                    {/* Links */}
                    {footerLinks.map((section) => (
                        <div key={section.title}>
                            <h3 className="font-bold text-xl mb-4">{section.title}</h3>
                            <ul className="space-y-1">
                                {section.links.map((link) => (
                                    <li
                                        key={link.name}
                                        className="text-gray-600 hover:text-violet-500 transition"
                                    >
                                        <a href={link.route}>{link.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="flex w-full justify-end mt-16">
                    <div className="flex items-center gap-4 md:mt-0">
                        {socialLinks.map((item, index) => (
                            <a
                                key={index}
                                href={item.url}
                                className="p-3 flex items-center justify-center rounded-full bg-violet-500 text-white hover:bg-violet-500  transition"
                            >
                                {iconMap[item.icon]}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between mt-10 border-t border-gray-200 pt-6">
                    <p className="text-2xl">
                        © 2025 ASAN AI HUB. All rights reserved.
                    </p>
                    <a href="#" className="text-2xl hover:text-violet-500">
                        Terms of Services
                    </a>
                </div>
            </div>
        </footer>
    );
}
