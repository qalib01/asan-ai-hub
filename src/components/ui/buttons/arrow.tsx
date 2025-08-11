import { ArrowUpRight } from "lucide-react";

type Position = "top-right" | "top-left" | "bottom-right" | "bottom-left";

interface ArrowButtonProps {
    position: Position;
}

const ArrowButton: React.FC<ArrowButtonProps> = ({ position }) => {
    let arrowPos = "";
    const cornerClasses = {
        wrapper: "",
        corner1: "",
        corner2: "",
    };

    switch (position) {
        case "top-right":
            arrowPos = "top-0 right-0";
            cornerClasses.wrapper = "top-0 right-0";
            cornerClasses.corner1 = "top-[80px] right-0 rounded-tr-4xl top-right-corner";
            cornerClasses.corner2 = "top-0 right-[80px] rounded-tr-4xl top-right-corner";
            break;
        case "top-left":
            arrowPos = "top-0 left-0";
            cornerClasses.wrapper = "top-0 left-0";
            cornerClasses.corner1 = "top-[80px] left-0 rounded-tl-4xl";
            cornerClasses.corner2 = "top-0 left-[80px] rounded-tl-4xl";
            break;
        case "bottom-right":
            arrowPos = "bottom-0 right-0";
            cornerClasses.wrapper = "bottom-0 right-0";
            cornerClasses.corner1 = "bottom-[80px] right-0 rounded-tr-4xl bottom-right-corner";
            cornerClasses.corner2 = "bottom-0 right-[80px] rounded-tr-4xl bottom-right-corner";
            break;
        case "bottom-left":
            arrowPos = "bottom-0 left-0";
            cornerClasses.wrapper = "bottom-0 left-0";
            cornerClasses.corner1 = "bottom-[80px] left-0 rounded-bl-4xl";
            cornerClasses.corner2 = "bottom-0 left-[80px] rounded-bl-4xl";
            break;
        default:
            arrowPos = "";
    }

    return (
        <>
            <div
                className={`absolute ${arrowPos} bg-violet-500 rounded-full p-4 z-10`}
            >
                <ArrowUpRight size={32} color="white" />
            </div>

            <div className={`bg-white h-20 w-20 rounded-bl-4xl absolute ${arrowPos} z-4`} />
            <div className={`bg-transparet h-20 w-20 absolute z-4 corner-white ${cornerClasses.corner1}`} />
            <div className={`bg-transparet h-20 w-20 absolute z-4 corner-white ${cornerClasses.corner2}`} />
        </>
    );
};

export default ArrowButton;