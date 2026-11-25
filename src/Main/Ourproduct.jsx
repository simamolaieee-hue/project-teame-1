import { Heart, Eye, Star } from "lucide-react";
import { ArrowLeft, ArrowRight } from "lucide-react"
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
function Ourproduct() {
    const [favorites, setFavorites] = useState(() => {
        return JSON.parse(localStorage.getItem("wishlist")) || [];
    });
    const toggleFavorite = (product) => {
        const updatedFavorites = favorites.some(item => item.id === product.id)
            ? favorites.filter(item => item.id !== product.id)
            : [...favorites, product];

        setFavorites(updatedFavorites);
        localStorage.setItem("wishlist", JSON.stringify(updatedFavorites));
        window.dispatchEvent(new Event("wishlistUpdated"));
    };
    const [swiper, setSwiper] = useState(null);
    const [image5, setImage5] = useState(0);
    const [image6, setImage6] = useState(0);
    const [image7, setImage7] = useState(0);
    const [image8, setImage8] = useState(0);
    return (
        <>
            <div className="mt-15">
                <div className="ml-25 flex gap-5 items-center">
                    <div className="w-5 h-10 bg-[#DB4444] rounded-[5px]"></div>
                    <h1 className="text-[#DB4444] font-bold">Our Products</h1>
                </div>

                <div className="flex gap-22 ml-24 mt-8 items-center">
                    <h1 className="text-4xl font-bold">Explore Our Products</h1>

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

                <div className="flex gap-6 ml-25 mt-12">
                    <div className="w-55 h-70 bg-white">
                        <div className="w-55 h-53 bg-gray-100 rounded-[5px] flex justify-center items-center">
                            <button onClick={() => toggleFavorite({
                                id: 0,
                                name: "Breed Dry Dog Food",
                                price: 100,
                                image: "im1.png"
                            })}
                                className="w-7 h-7 bg-white rounded-full flex items-center justify-center relative bottom-22 left-41">
                                <Heart
                                    fill={favorites.some(item => item.id === 0) ? "red" : "none"}
                                    color={favorites.some(item => item.id === 0) ? "red" : "black"}
                                    size={16}
                                />
                            </button>
                            <button className="w-7 h-7 bg-white rounded-full flex items-center justify-center relative bottom-14.5 left-34">
                                <Eye size={16} />
                            </button>
                            <img className="w-32 h-32 relative right-5" src="im1.png" alt="" />
                        </div>
                        <h1 className="font-bold">Breed Dry Dog Food</h1>
                        <div className="flex justify-start gap-3.5">
                            <h4 className="text-red-600 ">$100</h4>
                            <div className="flex mt-1.5">
                                <Star size={15} className=" text-amber-400 fill-amber-400"></Star>
                                <Star size={15} className=" text-amber-400 fill-amber-400"></Star>
                                <Star size={15} className=" text-amber-400 fill-amber-400"></Star>
                                <Star size={15} className=" text-gray-300 fill-gray-300"></Star>
                                <Star size={15} className=" text-gray-300 fill-gray-300"></Star>
                            </div>
                            <h4 className=" text-[13px] text-gray-500 mt-1">(35)</h4>
                        </div>

                    </div>


                    <div className="w-55 h-70 bg-white">
                        <div className="w-55 h-53 bg-gray-100 rounded-[5px] flex justify-center items-center">
                            <button onClick={() => toggleFavorite({
                                id: 1,
                                name: "CANON EOS DSLR Camera",
                                price: 360,
                                image: "im2.png"
                            })}
                                className="w-7 h-7 bg-white rounded-full flex items-center justify-center relative bottom-22 left-41">
                                <Heart fill={favorites.some(item => item.id === 1) ? "red" : "none"}
                                    color={favorites.some(item => item.id === 1) ? "red" : "black"}
                                    size={16} />
                            </button>
                            <button className="w-7 h-7 bg-white rounded-full flex items-center justify-center relative bottom-14.5 left-34">
                                <Eye size={16} />
                            </button>
                            <img className="w-32 h-32 relative right-5" src="im2.png" alt="" />
                        </div>
                        <h1 className="font-bold">CANON EOS DSLR Camera</h1>
                        <div className="flex justify-start gap-3.5">
                            <h4 className="text-red-600 ">$360</h4>
                            <div className="flex mt-1.5">
                                <Star size={15} className=" text-amber-400 fill-amber-400"></Star>
                                <Star size={15} className=" text-amber-400 fill-amber-400"></Star>
                                <Star size={15} className=" text-amber-400 fill-amber-400"></Star>
                                <Star size={15} className=" text-amber-400 fill-amber-400"></Star>
                                <Star size={15} className=" text-gray-300 fill-gray-300"></Star>
                            </div>
                            <h4 className=" text-[13px] text-gray-500 mt-1">(95)</h4>
                        </div>

                    </div>

                    <div className="w-55 h-70 bg-white">
                        <div className="w-55 h-53 bg-gray-100 rounded-[5px] flex justify-center items-center">
                            <button onClick={() => toggleFavorite({
                                id: 2,
                                name: "ASUS FHD Gaming Laptop",
                                price: 700,
                                image: "im3.png"
                            })}
                                className="w-7 h-7 bg-white rounded-full flex items-center justify-center relative bottom-22 left-41">
                                <Heart fill={favorites.some(item => item.id === 2) ? "red" : "none"}
                                    color={favorites.some(item => item.id === 2) ? "red" : "black"}
                                    size={16} />
                            </button>
                            <button className="w-7 h-7 bg-white rounded-full flex items-center justify-center relative bottom-14.5 left-34">
                                <Eye size={16} />
                            </button>
                            <img className="w-32 h-32 relative right-5" src="im3.png" alt="" />
                        </div>
                        <h1 className="font-bold">ASUS FHD Gaming Laptop</h1>
                        <div className="flex justify-start gap-3.5">
                            <h4 className="text-red-600 ">$700</h4>
                            <div className="flex mt-1.5">
                                <Star size={15} className=" text-amber-400 fill-amber-400"></Star>
                                <Star size={15} className=" text-amber-400 fill-amber-400"></Star>
                                <Star size={15} className=" text-amber-400 fill-amber-400"></Star>
                                <Star size={15} className=" text-amber-400 fill-amber-400"></Star>
                                <Star size={15} className=" text-amber-400 fill-amber-400"></Star>
                            </div>
                            <h4 className=" text-[13px] text-gray-500 mt-1">(325)</h4>
                        </div>

                    </div>

                    <div className="w-55 h-70 bg-white">
                        <div className="w-55 h-53 bg-gray-100 rounded-[5px] flex justify-center items-center">
                            <button onClick={() => toggleFavorite({
                                id: 3,
                                name: "Curology Product Set",
                                price: 500,
                                image: "im4.png"
                            })}
                                className="w-7 h-7 bg-white rounded-full flex items-center justify-center relative bottom-22 left-41">
                                <Heart fill={favorites.some(item => item.id === 3) ? "red" : "none"}
                                    color={favorites.some(item => item.id === 3) ? "red" : "black"}
                                    size={16} />
                            </button>
                            <button className="w-7 h-7 bg-white rounded-full flex items-center justify-center relative bottom-14.5 left-34">
                                <Eye size={16} />
                            </button>
                            <img className="w-32 h-32 relative right-5" src="im4.png" alt="" />
                        </div>
                        <h1 className="font-bold">Curology Product Set </h1>
                        <div className="flex justify-start gap-3.5">
                            <h4 className="text-red-600 ">$500</h4>
                            <div className="flex mt-1.5">
                                <Star size={15} className=" text-amber-400 fill-amber-400"></Star>
                                <Star size={15} className=" text-amber-400 fill-amber-400"></Star>
                                <Star size={15} className=" text-amber-400 fill-amber-400"></Star>
                                <Star size={15} className=" text-amber-400 fill-amber-400"></Star>
                                <Star size={15} className=" text-gray-300 fill-gray-300"></Star>
                            </div>
                            <h4 className=" text-[13px] text-gray-500 mt-1">(145)</h4>
                        </div>
                    </div>
                </div>



                <div className="flex gap-6 ml-25 mt-7">

                    {/* P5 */}
                    <div className="w-55 h-70 bg-white">
                        <div className="w-55 h-53 bg-gray-100 rounded-[5px] flex justify-center items-center relative">

                            <button onClick={() => toggleFavorite({
                                id: 4,
                                name: "Kids Electric Car",
                                price: 960,
                                image: "im5.png"
                            })}
                                className="w-7 h-7 bg-white rounded-full flex items-center justify-center absolute top-2 right-2">
                                <Heart fill={favorites.some(item => item.id === 4) ? "red" : "none"}
                                    color={favorites.some(item => item.id === 4) ? "red" : "black"}
                                    size={16} />
                            </button>

                            <button className="w-7 h-7 bg-white rounded-full flex items-center justify-center absolute top-11 right-2">
                                <Eye size={16} />
                            </button>

                            <img
                                className="w-32 h-32 object-contain"
                                src={image5 === 0 ? "im5.png" : ""}
                                alt=""
                            />
                        </div>

                        <h1 className="font-bold">Kids Electric Car</h1>
                        <div className="flex justify-start gap-3.5">
                            <h4 className="text-red-600">$960</h4>
                            <div className="flex mt-1.5">
                                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={15} className="text-amber-400 fill-amber-400" />)}
                            </div>
                            <h4 className="text-[13px] text-gray-500 mt-1">(65)</h4>
                        </div>
                        <div className="flex gap-2 justify-center mt-3 mr-45">
                            <button onClick={() => setImage5(0)} className={`w-2.5 h-2.5 rounded-full bg-[#FB1314] ${image5 === 0 ? "ring-2 ring-black ring-offset-1" : ""}`} />
                            <button onClick={() => setImage5(1)} className={`w-2.5 h-2.5 rounded-full bg-[#DB4444] ${image5 === 1 ? "ring-2 ring-black ring-offset-1" : ""}`} />
                        </div>
                    </div>


                    {/* P 6 */}
                    <div className="w-55 h-70 bg-white">
                        <div className="w-55 h-53 bg-gray-100 rounded-[5px] flex justify-center items-center relative">

                            <button onClick={() => toggleFavorite({
                                id: 5,
                                name: "Jr. Zoom Soccer Cleats",
                                price: 1160,
                                image: "im6.png"
                            })}
                                className="w-7 h-7 bg-white rounded-full flex items-center justify-center absolute top-2 right-2">
                                <Heart fill={favorites.some(item => item.id === 5) ? "red" : "none"}
                                    color={favorites.some(item => item.id === 5) ? "red" : "black"}
                                    size={16} />
                            </button>

                            <button className="w-7 h-7 bg-white rounded-full flex items-center justify-center absolute top-11 right-2">
                                <Eye size={16} />
                            </button>

                            <img
                                className="w-32 h-32 object-contain"
                                src={image6 === 0 ? "im6.png" : ""}
                                alt=""
                            />
                        </div>

                        <h1 className="font-bold">Jr. Zoom Soccer Cleats</h1>
                        <div className="flex justify-start gap-3.5">
                            <h4 className="text-red-600">$1160</h4>
                            <div className="flex mt-1.5">
                                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={15} className="text-amber-400 fill-amber-400" />)}
                            </div>
                            <h4 className="text-[13px] text-gray-500 mt-1">(35)</h4>
                        </div>
                        <div className="flex gap-2 justify-center mt-3 mr-45">
                            <button onClick={() => setImage6(0)} className={`w-2.5 h-2.5 rounded-full bg-[#EEFF61] ${image6 === 0 ? "ring-2 ring-black ring-offset-1" : ""}`} />
                            <button onClick={() => setImage6(1)} className={`w-2.5 h-2.5 rounded-full bg-[#DB4444] ${image6 === 1 ? "ring-2 ring-black ring-offset-1" : ""}`} />
                        </div>
                    </div>


                    {/* P7 */}
                    <div className="w-55 h-70 bg-white">
                        <div className="w-55 h-53 bg-gray-100 rounded-[5px] flex justify-center items-center relative">

                            <button onClick={() => toggleFavorite({
                                id: 6,
                                name: "GP11 Shooter USB Gamepad",
                                price: 660,
                                image: "im7.png"
                            })}
                                className="w-7 h-7 bg-white rounded-full flex items-center justify-center absolute top-2 right-2">
                                <Heart fill={favorites.some(item => item.id === 6) ? "red" : "none"}
                                    color={favorites.some(item => item.id === 6) ? "red" : "black"}
                                    size={16} />
                            </button>

                            <button className="w-7 h-7 bg-white rounded-full flex items-center justify-center absolute top-11 right-2">
                                <Eye size={16} />
                            </button>

                            <img
                                className="w-32 h-32 object-contain"
                                src={image7 === 0 ? "im7.png" : ""}
                                alt=""
                            />
                        </div>

                        <h1 className="font-bold">GP11 Shooter USB Gamepad</h1>
                        <div className="flex justify-start gap-3.5">
                            <h4 className="text-red-600">$660</h4>
                            <div className="flex mt-1.5">
                                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={15} className="text-amber-400 fill-amber-400" />)}
                            </div>
                            <h4 className="text-[13px] text-gray-500 mt-1">(55)</h4>
                        </div>
                        <div className="flex gap-2 justify-center mt-3 mr-45">
                            <button onClick={() => setImage7(0)} className={`w-2.5 h-2.5 rounded-full bg-black ${image7 === 0 ? "ring-2 ring-black ring-offset-1" : ""}`} />
                            <button onClick={() => setImage7(1)} className={`w-2.5 h-2.5 rounded-full bg-[#DB4444] ${image7 === 1 ? "ring-2 ring-black ring-offset-1" : ""}`} />
                        </div>
                    </div>


                    {/* P8 */}
                    <div className="w-55 h-70 bg-white">
                        <div className="w-55 h-53 bg-gray-100 rounded-[5px] flex justify-center items-center relative">

                            <button onClick={() => toggleFavorite({
                                id: 7,
                                name: "Quilted Satin Jacket",
                                price: 660,
                                image: "im8.png"
                            })}
                                className="w-7 h-7 bg-white rounded-full flex items-center justify-center absolute top-2 right-2">
                                <Heart fill={favorites.some(item => item.id === 7) ? "red" : "none"}
                                    color={favorites.some(item => item.id === 7) ? "red" : "black"}
                                    size={16} />
                            </button>

                            <button className="w-7 h-7 bg-white rounded-full flex items-center justify-center absolute top-11 right-2">
                                <Eye size={16} />
                            </button>

                            <img
                                className="w-32 h-32 object-contain"
                                src={image8 === 0 ? "im8.png" : ""}
                                alt=""
                            />
                        </div>

                        <h1 className="font-bold">Quilted Satin Jacket</h1>
                        <div className="flex justify-start gap-3.5">
                            <h4 className="text-red-600">$660</h4>
                            <div className="flex mt-1.5">
                                {[1, 2, 3, 4].map(i => <Star key={i} size={15} className="text-amber-400 fill-amber-400" />)}
                                <Star size={15} className="text-gray-300 fill-gray-300" />
                            </div>
                            <h4 className="text-[13px] text-gray-500 mt-1">(55)</h4>
                        </div>
                        <div className="flex gap-2 justify-center mt-3 mr-45">
                            <button onClick={() => setImage8(0)} className={`w-2.5 h-2.5 rounded-full bg-gray-700 ${image8 === 0 ? "ring-2 ring-black ring-offset-1" : ""}`} />
                            <button onClick={() => setImage8(1)} className={`w-2.5 h-2.5 rounded-full bg-[#DB4444] ${image8 === 1 ? "ring-2 ring-black ring-offset-1" : ""}`} />
                        </div>
                    </div>

                </div>


                <div className="flex justify-center mt-10">
                    <button className="bg-[#DB4444] text-white px-12 py-3 rounded-sm text-sm hover:bg-red-600">
                        View All Products
                    </button>
                </div>
            </div >
        </>
    )
}
export default Ourproduct