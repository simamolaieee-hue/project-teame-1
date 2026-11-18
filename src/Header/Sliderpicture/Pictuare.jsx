
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";

import { FaApple } from "react-icons/fa";

function Pictuare() {
    return (
        <>
            <div className="flex w-full">

                <div className="w-[260px] h-91 border-r-1 border-gray-300 flex flex-col justify-end items-center ml-10 gap-3">

                    <button className="flex items-center justify-between w-full">
                        <span className="ml-17 mb-5">Woman’s Fashion</span>
                        <ChevronRight className="mb-3 mr-2" />
                    </button>
                    <button className="flex items-center justify-between w-full">
                        <span className="ml-17 relative bottom-4.5">Men’s Fashion</span>
                        <ChevronRight className="relative bottom-3 right-2" />
                    </button>
                    <h1 className="relative bottom-5 right-5.5">Electronics</h1>
                    <h1 className="relative bottom-5 right-0.5">Home & Lifestyle</h1>
                    <h1 className="relative bottom-5 right-7.5">Medicine</h1>
                    <h1 className="relative bottom-5 right-1">Sports & Outdoor</h1>
                    <h1 className="relative bottom-5 right-4">Baby’s & Toys</h1>
                    <h1 className="relative bottom-5 right-2.5">Groceries & Pets</h1>
                    <h1 className="relative bottom-5 right-2.5">Health & Beauty</h1>
                </div>

                <div className="flex-1 min-w-0 mt-10 ml-10">
                    <Swiper
                        className="w-full picture-swiper"
                        modules={[Pagination]}
                        pagination={{ clickable: true }}
                        loop={true}
                    >

                        <SwiperSlide>
                            <div className="w-185 h-[320px] bg-black flex items-center justify-between px-10">

                                <div className="w-1/2 text-white">
                                    <div className="flex items-center gap-3">
                                        <FaApple size={40} />
                                        <h4>iPhone 14 Series</h4>
                                    </div>

                                    <h1 className="text-5xl font-bold mt-6">
                                        Up to 10% off Voucher
                                    </h1>

                                    <p className="mt-6">Shop Now →</p>
                                </div>

                                <div className="w-1/2">
                                    <img
                                        src="/slider.png"
                                        className="w-185 h-[320px] object-contain"
                                        alt="iPhone"
                                    />
                                </div>

                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="w-185 h-[320px] bg-gray-800 flex items-center justify-center text-white">
                                اسلاید دوم
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="w-185 h-[320px] bg-gray-700 flex items-center justify-center text-white">
                                اسلاید سوم
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="w-185 h-[320px] bg-gray-600 flex items-center justify-center text-white">
                                اسلاید چهارم
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="w-185 h-[320px] bg-gray-500 flex items-center justify-center text-white">
                                اسلاید پنجم
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>

            </div>
        </>
    );
}
export default Pictuare;

