import { Clipboard } from "lucide-react";


interface PageProp {
    title: string;
    description: string;
    img: string;
}

const ChallengeCard = ({ title, description, img }: PageProp) => {
    return (
        <div className="bg-gray-200 relative rounded-3xl p-8 flex w-full overflow-hidden">
            <div className="flex-1 gap-8 flex flex-col">
                <div className="inline-flex items-center py-2 mb-8">
                    <button className="w-15 h-15 rounded-full bg-violet-500 flex items-center justify-center text-white cursor-pointer">
                        <Clipboard size={24} />
                    </button>
                    <button className="font-medium rounded-full text-xl border-1 border-gray-400 h-15 px-8 cursor-pointer">Last Challenge</button>
                </div>

                <div className="flex gap-4 flex-col w-80">
                    <h2 className="text-4xl font-bold mb-2"> {title} </h2>
                    <p className="text-2xl text-gray-600"> {description} </p>
                </div>
            </div>

            <div className="flex-1 flex justify-center items-center gap-4 absolute bottom-0 right-0">
                <img
                    src={img}
                    alt="App Preview 1"
                    className="h-64 object-contain"
                />
            </div>
        </div>
    );
};


export default ChallengeCard;