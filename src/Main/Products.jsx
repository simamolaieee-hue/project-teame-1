import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {Heart,Eye, Star} from "lucide-react";
import productslist from "./array";
function Products() {
    const [swiper, setSwiper] = useState(null);
    return (
        <>
            <div className="mt-25">

                <div className="ml-25 flex gap-5 items-center">
                    <div className="w-5 h-10 bg-[#DB4444] rounded-[5px]"></div>
                    <h1 className="text-[#DB4444] font-bold">Today’s</h1>
                </div>

                <div className="mt-10">

                    <div className="flex gap-22 ml-22 items-center">

                        <h1 className="text-4xl font-bold">Flash Sales</h1>
                        <div className="flex items-center gap-4">
                            <div>
                                <h2 className="text-[10px] font-medium">Days</h2>
                                <p className="text-[34px] font-bold leading-none">03</p>
                            </div>

                            <span className="text-5xl text-[#DB4444]">:</span>
                            <div>
                                <h2 className="text-[10px] font-medium">Hours</h2>
                                <p className="text-[34px] font-bold leading-none">23</p>
                            </div>

                            <span className="text-5xl text-[#DB4444]">:</span>
                            <div>
                                <h2 className="text-[10px] font-medium">Minutes</h2>
                                <p className="text-[34px] font-bold leading-none">19</p>
                            </div>
                            <span className="text-5xl text-[#DB4444]">:</span>
                            <div>
                                <h2 className="text-[10px] font-medium">Seconds</h2>
                                <p className="text-[34px] font-bold leading-none">56</p>
                            </div>

                        </div>

                       <div className="flex gap-1 ml-70">
                         <button
                            onClick={() => swiper?.slidePrev()}
                            className="w-9 h-9 rounded-full bg-[#F5F5F5] flex items-center justify-center "
                        >
                            <ArrowLeft size={19} />
                        </button>

                        <button
                            onClick={() => swiper?.slideNext()}
                            className="w-9 h-9 rounded-full bg-[#F5F5F5] flex items-center justify-center "
                        >
                            <ArrowRight size={19} />
                        </button>
                       </div>
                    </div>

                </div>


                <section className="w-full px-[90px] py-8">

                    <Swiper
                        onSwiper={setSwiper}
                        slidesPerView="auto"
                        spaceBetween={18}
                        className="w-full"
                    >

                        {productslist.map((item) => (

                            <SwiperSlide
                                key={item.id}
                                className="!w-[205px]"
                            >

                                <div className="w-full ">

                                
                                    <div className="relative  h-[190px] bg-[#F5F5F5] rounded-sm flex items-center justify-center overflow-hidden">

                                        <span className="absolute top-2 left-2 bg-[#DB4444] text-white text-[10px] px-2 py-1 rounded-sm z-10">
                                            {item.discount}
                                        </span>

                                        
                                        <div className="absolute top-2 right-2 flex flex-col gap-2 z-10">

                                            <button className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
                                                <Heart size={16} />
                                            </button>

                                            <button className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
                                                <Eye size={16} />
                                            </button>

                                        </div>

                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-[65%] h-[140px] object-contain"
                                        />

                                        <button className="absolute bottom-0 left-0 w-full bg-black text-white text-sm py-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                            Add To Cart
                                        </button>

                                    </div>

                                    <div className="mt-3">

                                        <h3 className="text-xs font-medium truncate">
                                            {item.name}
                                        </h3>

                                        <div className="flex items-center gap-3 mt-2 text-xs">
                                            <span className="text-[#DB4444]">
                                                ${item.price}
                                            </span>

                                            <del className="text-gray-400">
                                                ${item.oldPrice}
                                            </del>
                                        </div>

                                        <div className="flex items-center gap-2 mt-2">
                                        {/* نمایش امتیاز و تعداد ستاره‌های هر محصول بر اساس مقدار rating ستاره‌های امتیازگرفته‌شده زرد و بقیه خاکستری نمایش داده می‌شوند*/}
                                            <div className="flex items-center gap-[2px]">
                                                {Array.from({ length: 5 }).map((_, index) => (
                                                    <Star
                                                        key={index}
                                                        size={13}
                                                        fill={index < item.rating ? "#FFAD33" : "#D1D5DB"}
                                                        stroke="none"
                                                    />
                                                ))}
                                            </div>

                                            <span className="text-gray-500 text-[10px]">
                                                ({item.reviews})
                                            </span>

                                        </div>

                                    </div>

                                </div>

                            </SwiperSlide>

                        ))}

                    </Swiper>

                    <div className="flex justify-center mt-10">
                        <button className="bg-[#DB4444] text-white px-12 py-3 rounded-sm text-sm hover:bg-red-600">
                            View All Products
                        </button>
                    </div>

                </section>

                <div className="w-220 h-px bg-gray-300 flex mt-4 mx-20"></div>
            </div>
        </>
    )
}
export default Products