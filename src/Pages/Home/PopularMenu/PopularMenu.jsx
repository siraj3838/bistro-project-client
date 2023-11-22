import { useEffect, useState } from "react";
import SectionTittle from "../../../components/SectionTittle/SectionTittle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category == 'popular');
    
    return (
        <section>
            <SectionTittle heading={'FROM OUR MENU'} subHeading={"Check it out"}></SectionTittle>

            <div className="grid md:grid-cols-2 gap-10 my-10">
                {
                    popular.map(menu => <MenuItem menu={menu} key={menu._id}></MenuItem>)
                }
            </div>
            <div className="flex justify-center">
                <button className="btn btn-outline border-0 border-b-4">View Full Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;