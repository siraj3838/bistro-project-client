
const SectionTittle = ({heading, subHeading}) => {
    return (
        <div className="text-center max-w-screen-sm mx-auto mt-10 px-28">
            <p className="text-[#D99904] text-xl pb-3">--- {subHeading} ---</p>
            
            <h2 className="border-y-4 py-5 text-4xl font-semibold uppercase">{heading}</h2>
            
        </div>
    );
};

export default SectionTittle;