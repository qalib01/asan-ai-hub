import { Mail } from "lucide-react";

const GetInTouch = () => {
    return (
        <section className="w-full relative bg-violet-500 py-8 rounded-4xl flex overflow-hidden">
            <div className="p-10 flex flex-col md:flex-row items-center gap-8 justify-between text-white">
                <h2 className="text-7xl tracking-wider font-medium flex-shrink-0"> Get in Touch </h2>
                <div className="">
                    <p className="mb-8 mr-12">We'd love to hear from you! Whether you have a question about our services, need assistance with a project, or just want to say hello, our team is here to help</p>
                    <button className="flex bg-white text-black px-4 rounded-full py-3 gap-2 m-0 cursor-pointer">
                        <Mail size={20} />
                        Contact Us
                    </button>
                </div>
            </div>
            <img src="/media/icons/hand.png" className="absolute bottom-0 right-0" />
        </section>
    )
}

export default GetInTouch;