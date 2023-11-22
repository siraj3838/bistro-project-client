import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';
import SectionTittle from '../../../components/SectionTittle/SectionTittle';

const Category = () => {
    return (
        <section>
            <SectionTittle heading={"ORDER ONLINE"} subHeading={'From 11:00am to 10:00pm'}></SectionTittle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper my-10"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h3 className='text-3xl uppercase text-center -mt-20 text-base-100 mb-10'>Salad</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h3 className='text-3xl uppercase text-center -mt-20 text-base-100 mb-10'>pizzas</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h3 className='text-3xl uppercase text-center -mt-20 text-base-100 mb-10'>Soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h3 className='text-3xl uppercase text-center -mt-20 text-base-100 mb-10'>desserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h3 className='text-3xl uppercase text-center -mt-20 text-base-100 mb-10'>Salad</h3>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;