import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import img from '../../assets/menu/banner3.jpg'
import img2 from '../../assets/menu/dessert-bg.jpeg'
import img3 from '../../assets/menu/pizza-bg.jpg'
import img4 from '../../assets/menu/salad-bg.jpg'
import img5 from '../../assets/menu/soup-bg.jpg'
import useMenu from "../../Hooks/useMenu";
import SectionTittle from "../../components/SectionTittle/SectionTittle";
import MenuCategory from "./MenuCategory/MenuCategory";

const OurMenu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category == 'dessert');
    const pizza = menu.filter(item => item.category == 'pizza');
    const salad = menu.filter(item => item.category == 'salad');
    const soup = menu.filter(item => item.category == 'soup');
    const offered = menu.filter(item => item.category == 'offered');
    return (
        <div>
            <Helmet>
                <title>Bistro || Our Menu</title>
            </Helmet>
            <Cover img={img} title={'Our Menu'}></Cover>
            {/* main cover */}
            <SectionTittle subHeading="Don't Miss" heading="Today's offer"></SectionTittle>
            {/* offered menu items */}
            <MenuCategory items={offered} ></MenuCategory>
            {/* dessert */}
            <MenuCategory items={desserts} title={'dessert'} img2={img2}></MenuCategory>
            <MenuCategory items={pizza} title={"pizza"} img2={img3}
            ></MenuCategory>
            <MenuCategory items={salad} title={"salad"} img2={img4}></MenuCategory>
            <MenuCategory items={soup} title={"soup"} img2={img5}></MenuCategory>
            
        </div>
    );
};

export default OurMenu;