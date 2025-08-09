interface PageProp {
    title: string;
    description?: string;
}

const logos = [
    "/media/icons/airbnb.png",
    "/media/icons/amazon.png",
    "/media/icons/canva.png",
];

const PartnersSection = ({ title, description }: PageProp) => {
    return (
        <section className="w-full py-12">
            <div className="text-center mb-12">
                <h2 className="text-3xl"> {title} </h2>
                {description && <p className="text-gray-500 mx-auto max-w-3xl mt-6">{description}</p>}
            </div>
            <div className="flex items-center gap-16 overflow-x-auto scrollbar-hide">
                {logos.map((logo, idx) => (
                    <img
                        width={180}
                        height={50}
                        key={idx}
                        src={logo}
                        className="object-contain grayscale hover:grayscale-0 transition"
                    />
                ))}
            </div>
        </section>
    )
}

export default PartnersSection;