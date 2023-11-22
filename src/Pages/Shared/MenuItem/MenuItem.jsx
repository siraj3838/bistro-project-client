
const MenuItem = ({ menu }) => {
    const { name, price, image, recipe } = menu || {};
    return (
        <div className="flex items-center gap-5">
            <img className="w-[118px] h-[104px]" style={{borderRadius: '0px 200px 200px 200px'}} src={image} alt="" />
            <div className="space-y-3">
                <h3 className="text-xl font-medium uppercase">{name}-----------</h3>
                <p className="text-[#737373]">{recipe}</p>
            </div>
            <h3 className="text-[#BB8506] text-xl font-medium">${price}</h3>
        </div>
    );
};

export default MenuItem;