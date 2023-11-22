import SectionTittle from "../../../components/SectionTittle/SectionTittle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FaQuoteLeft } from 'react-icons/fa';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const Testimonials = () => {
    const [reviewsData, setReviewsData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => {
                setReviewsData(data)
            })
    }, [])
    return (
        <section className="space-y-4">
            <SectionTittle subHeading={'What Our Clients Say'} heading={'TESTIMONIALS'}></SectionTittle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviewsData.map(review => <SwiperSlide key={review._id}>
                        <div className="max-w-screen-lg mx-auto space-y-5 text-center my-16">
                            <div className="flex justify-center text-5xl text-[#CD9003]"><Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            /></div>
                            <p className="text-6xl text-black flex justify-center py-5"><FaQuoteLeft></FaQuoteLeft></p>
                            <p>{review.details}</p>
                            <h3 className="text-3xl font-medium text-[#CD9003]">{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;