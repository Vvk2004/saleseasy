import React from 'react'
import '../assets/style/companies.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import logo1 from '../assets/images/logo1.png'
import logo2 from '../assets/images/logo2.png'
import logo3 from '../assets/images/logo3.png'
import logo4 from '../assets/images/logo4.png'
import logo5 from '../assets/images/logo5.png'
import logo6 from '../assets/images/logo6.png'
import logo7 from '../assets/images/logo7.png'

const Companies = () => {
  return (
    <div className="mainCompanies">
        <div className="container">
            <div className="companies">
                <div className="text">
                    <p>
                        Trusted by
                        <span>1000+ Teams</span>
                        across
                        <span>100+ Countries</span>
                    </p>
                </div>
                <div className="logos">
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={5}
                        loop={true}
                        autoplay={{ delay: 2000 }}
                        breakpoints={{
                            1200: {
                                slidesPerView: 7,
                            },
                            1024: {
                                slidesPerView: 5,
                            },
                            700: {
                                slidesPerView: 4,
                            },
                            500: {
                                slidesPerView: 3,
                            },
                            0: {
                                slidesPerView: 2,
                            }
                        }}
                    >
                        <SwiperSlide><img src={logo1} alt="Logo 1" /></SwiperSlide>
                        <SwiperSlide><img src={logo2} alt="Logo 2" /></SwiperSlide>
                        <SwiperSlide><img src={logo3} alt="Logo 3" /></SwiperSlide>
                        <SwiperSlide><img src={logo4} alt="Logo 4" /></SwiperSlide>
                        <SwiperSlide><img src={logo5} alt="Logo 5" /></SwiperSlide>
                        <SwiperSlide><img src={logo6} alt="Logo 6" /></SwiperSlide>
                        <SwiperSlide><img src={logo7} alt="Logo 7" /></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div> 
    </div>
  )
}

export default Companies
