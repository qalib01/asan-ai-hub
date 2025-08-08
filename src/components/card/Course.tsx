import { ArrowUpRight } from "lucide-react";

interface PageProp {
    title: string;
    description: string;
    img: string;
}

const CourseCard = ({ title, description, img }: PageProp) => {
    return (
        <div className="flex w-full flex-col">
            <div className="flex-1 gap-8 flex flex-col relative">
                <img
                    src={img}
                    className="aspect-square rounded-4xl object-cover"
                />
                <div className="absolute bottom-0 right-0 bg-violet-500 rounded-full p-4 z-5">
                    <ArrowUpRight size={32} color="white" />
                </div>
                <div className="bg-white h-20 w-20 rounded-tl-4xl absolute bottom-0 right-0 z-4" />
                <div className="bg-transparet h-20 w-20 rounded-br-4xl absolute bottom-[80px] right-0 z-4 corner-white bottom-right-corner" />
                <div className="bg-transparet h-20 w-20 rounded-br-4xl absolute bottom-0 right-[80px] z-4 corner-white bottom-right-corner" />
            </div>

            <div className="gap-4 mt-4">
                <h6 className="text-2xl font-medium"> {title} </h6>
                <p className="text-lg font-normal"> {description} </p>
            </div>
        </div>
    );
};


export default CourseCard;