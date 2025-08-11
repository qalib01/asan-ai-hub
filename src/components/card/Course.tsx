import ArrowButton from "../ui/buttons/arrow";


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

                <ArrowButton position="bottom-right" />
            </div>

            <div className="gap-4 mt-4">
                <h6 className="text-2xl font-medium"> {title} </h6>
                <p className="text-lg font-normal"> {description} </p>
            </div>
        </div>
    );
};


export default CourseCard;