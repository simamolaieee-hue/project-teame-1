import { ArrowLeft, ArrowRight } from "lucide-react"
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react"
function Thismonth(){
     const [swiper, setSwiper] = useState(null);
    return(
        <>
        <div className="mt-10">
             <div className="ml-25 flex gap-5 items-center">
                    <div className="w-5 h-10 bg-[#DB4444] rounded-[5px]"></div>
                    <h1 className="text-[#DB4444] font-bold">Categories</h1>
                </div>

                <div className="flex gap-22 ml-24 mt-8 items-center">
                    <h1 className="text-4xl font-bold">Browse By Category</h1>
                    <div className="flex gap-1 ml-110">
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
        </>
    )
}
export default Thismonth