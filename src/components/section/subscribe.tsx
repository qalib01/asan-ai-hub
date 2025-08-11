import Input from "../ui/form/input";

const Subscribe = () => {
    return (
        <section className="w-full relative bg-violet-200 py-8 my-8 rounded-4xl flex overflow-hidden">
            <div className="p-5 md:p-10 flex flex-col md:flex-row items-start gap-8 justify-between">
                <div className="w-full md:w-1/2">
                    <h2 className="text-6xl tracking-wider font-medium "> Stay updated on our activities </h2>
                </div>
                <div className="w-full md:w-1/2">
                    <form className="grid gap-8">
                        <div className="flex gap-4 items-center w-full">
                            <Input placeholder="First name" />
                            <Input placeholder="Last name" />
                        </div>
                        <Input placeholder="Email" type="email" />
                        <button className="w-full bg-violet-500 text-white rounded-full outline-none cursor-pointer p-4"> Subscribe </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Subscribe;