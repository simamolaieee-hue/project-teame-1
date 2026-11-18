import { Categories } from "./array"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
function Categorie() {
    const [swiper, setSwiper] = useState(null);
    return (
        <>
            <div className="mt-20">
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

                <div className="flex gap-5 mt-10 justify-center mr-4">
                    {Categories.map((item) => (
                        <div key={item.id}
                            className={`w-35 h-33 flex flex-col justify-center items-center rounded-[5px] border-1 border-gray-400
                                 ${item.active
                                    ? "bg-[#DB4444] text-white"
                                    : "bg-white text-black"
                                }`}
                        >
                            <img src={item.image} alt={item.name}
                            className="w-15 h-10"
                            />
                            <h1 className="mt-3">{item.name}</h1>
                        </div>
                    ))}
                </div>
                 <div className="w-220 h-px bg-gray-300 flex mt-4 mx-25 mt-14"></div>
            </div>
        </>
    )
}
export default Categorie