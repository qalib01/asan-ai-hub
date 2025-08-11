interface PageProp {
    title: string;
    description?: string;
    children: React.ReactNode;
}

const SimpleSection = ({ title, description, children }: PageProp) => {
    return (
        <section className="w-full py-12">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-6xl font-medium"> {title} </h2>
                {description && <p className="text-gray-500 text-lg md:text-xl mx-auto max-w-3xl mt-6">{description}</p>}
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-8">
                {children}
            </div>
        </section>
    )
}

export default SimpleSection;