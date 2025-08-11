import type { IExpert } from "../../types/user.type";
import ArrowButton from "../ui/buttons/arrow";


const TeamCard = ({ expert, idx }: { expert: IExpert, idx: number }) => {
    return (
        <div
            className="relative group w-full rounded-4xl overflow-hidden"
        >
            <img
                src={expert.img}
                alt={`${expert.first_name} ${expert.last_name}`}
                className="w-full object-cover"
            />

            {idx === 1 && (
                <div className="bg-violent-500/50 h-full rounded-b-4xl w-full absolute bottom-0 left-0" style={{ background: 'linear-gradient(0deg,rgba(124, 88, 255, 0.5) 0%, rgba(27, 27, 27, 0) 100%)' }}></div>
            )}

            <ArrowButton position='top-right' />

            <div
                className={`absolute bottom-4 left-4 text-white ${idx !== 1 ? "text-black" : "text-white"}`}
            >
                <h3 className="text-3xl font-medium">{expert.first_name} {expert.last_name}</h3>
                <p className="text-xl">{expert.position}</p>
            </div>
        </div>
    );
};


export default TeamCard;