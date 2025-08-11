import ArrowButton from "../ui/buttons/arrow";

interface PageProp {
    title: string;
    img: string;
}

const ActivityCard = ({ title, img }: PageProp) => {
    return (
        <div className="flex w-full flex-col relative">
            <div className="flex-1 gap-8 flex flex-col relative">
                <img
                    src={img}
                    className="aspect-square rounded-4xl object-cover"
                />

                <ArrowButton position="top-right" />
            </div>
            
            <div className="bg-violent-500/50 h-full rounded-b-4xl w-full absolute bottom-0 left-0" style={{ background: 'linear-gradient(0deg,rgba(124, 88, 255, 0.5) 0%, rgba(27, 27, 27, 0) 100%)' }}></div>

            <div className="gap-4 mt-4 absolute bottom-7 left-5 text-white">
                <h6 className="text-4xl font-medium"> {title} </h6>
            </div>
        </div>
    );
};


export default ActivityCard;