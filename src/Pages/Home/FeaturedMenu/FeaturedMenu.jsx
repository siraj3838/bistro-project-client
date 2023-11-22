import SectionTittle from "../../../components/SectionTittle/SectionTittle";

import featuredImg from '../../../assets/home/featured.jpg'
import './FeaturedMenu.css'

const FeaturedMenu = () => {
    return (
        <section className="featured-item bg-fixed text-white pt-6 my-20">
            <SectionTittle heading={'Featured Menu'} subHeading={'Check it out'}></SectionTittle>
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-50 py-8 px-16">
                <div>
                    <img className="" src={featuredImg} alt="" />
                </div>
                <div className="space-y-10 md:ml-10">
                    <h3 className="text-xl">December 20, 2023</h3>
                    <h3 className="text-xl">WHERE CAN I GET SOME?</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, illum aliquid, ducimus beatae ab, fugiat similique velit aperiam deleniti laudantium error et consequatur! Ad blanditiis temporibus veniam id similique soluta ipsum eum, enim facilis culpa.
                    </p>
                    <button className="btn btn-outline border-0 border-b-4">Order Now</button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedMenu;