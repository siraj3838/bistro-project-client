import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import FeaturedMenu from "./FeaturedMenu/FeaturedMenu";
import PopularMenu from "./PopularMenu/PopularMenu";
import Testimonials from "./Testimonials/Testimonials";
import SecondBanner from "./SecondBanner/SecondBanner";
import ThirdBanner from "./ThirdBanner/ThirdBanner";
import ChefRecommend from "./ChefRecom/ChefRecommend";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro || Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <SecondBanner></SecondBanner>
            <PopularMenu></PopularMenu>
            <ThirdBanner></ThirdBanner>
            <ChefRecommend></ChefRecommend>
            <FeaturedMenu></FeaturedMenu>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;