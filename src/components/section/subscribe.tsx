import Input from "../ui/form/input";

const Subscribe = () => {
    return (
        <section className="w-full relative bg-violet-200 py-8 my-8 rounded-4xl flex overflow-hidden">
            <div className="p-10 flex flex-col md:flex-row items-center gap-8 justify-between">
                <div className="w-1/2">
                    <h2 className="text-6xl tracking-wider font-medium "> Stay updated on our activities </h2>
                </div>
                <div className="w-1/2">
                    <form className="grid gap-4">
                        <div className="flex gap-4 items-center w-full">
                            <Input placeholder="First name" />
                            <Input placeholder="Last name" />
                        </div>
                        <Input placeholder="Email" />
                        
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Subscribe;