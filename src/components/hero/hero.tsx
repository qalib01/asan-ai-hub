import { ArrowRight, Clock4 } from "lucide-react";


export default function HeroSection() {
    return (
        <section className="mx-8 mt-12 flex flex-col gap-8">
            <div className="w-full h-72 rounded-4xl overflow-hidden relative">
                <img src="/media/images/handshake.jpg" className="object-cover w-full h-full" />
                <div className="absolute bottom-6 right-6">
                    <button className="flex items-center bg-white/30 rounded-full px-8 py-4 backdrop-blur gap-4 cursor-pointer">
                        <p className="text-3xl text-white">Let’s Talk with Us</p>
                        <ArrowRight size={32} color="white" />
                    </button>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-between items-start">
                <div className="flex-1 space-y-8">
                    <h1 className="text-7xl font-bold leading-tight">
                        Protect time <br /> Learn more
                    </h1>

                    <div className="grid gap-8 relative border border-gray-200 p-4 rounded-4xl w-[330px] h-[230px] shadow-md bg-gray-100 overflow-hidden">
                        <div className="w-14 h-14 rounded-full bg-violet-500 flex items-center justify-center mr-4">
                            <Clock4 color="white" size={24} />
                        </div>
                        <div>
                            <p className="text-4xl font-semibold">24 / 7</p>
                            <p className="text-2xl">Customer Support</p>
                        </div>
                        <div className="absolute top-0 right-0">
                            <img src="/media/icons/star.png" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
