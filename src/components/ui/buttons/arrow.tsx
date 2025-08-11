import { ArrowUpRight } from "lucide-react";

type Position = "top-right" | "top-left" | "bottom-right" | "bottom-left";

interface ArrowButtonProps {
    position: Position;
}

const ArrowButton: React.FC<ArrowButtonProps> = ({ position }) => {
    let arrowPos = "";

    switch (position) {
        case "top-right":
            arrowPos = "top-0 right-0";
            break;
        case "top-left":
            arrowPos = "top-0 left-0";
            break;
        case "bottom-right":
            arrowPos = "bottom-0 right-0";
            break;
        case "bottom-left":
            arrowPos = "bottom-0 left-0";
            break;
        default:
            arrowPos = "";
    }

    return (
        <div
            className={`absolute ${arrowPos} bg-violet-500 rounded-full p-4 z-10`}
        >
            <ArrowUpRight size={32} color="white" />
        </div>
    );
};

export default ArrowButton;