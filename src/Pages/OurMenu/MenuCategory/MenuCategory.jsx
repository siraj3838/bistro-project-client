import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, img2 }) => {
    return (
        <div>
            {
                title ? <Cover img={img2} title={title}></Cover>
                    :
                    ''
            }
            <div className="grid md:grid-cols-2 gap-10 my-10">
                {
                    items.map(menu => <MenuItem menu={menu} key={menu._id}></MenuItem>)
                }
            </div>
            <Link to={`/ourShop/${title}`}>
                <button className="btn btn-outline border-0 border-b-4">Order Now</button>
            </Link>
        </div>
    );
};

export default MenuCategory;