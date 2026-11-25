import {Heart,Eye, Star} from "lucide-react";
import { useState } from "react";
function Thismonth(){
    const [favorites, setFavorites] =useState([]);
        const toggleFavorite = (id) => {
            setFavorites(prev =>
                prev.includes(id)
                    ? prev.filter(item => item !== id)
                    : [...prev, id]
            );
        };
    return(
        <>
        <div className="mt-15">
            <div className="ml-25 flex gap-5 items-center">
                    <div className="w-5 h-10 bg-[#DB4444] rounded-[5px]"></div>
                    <h1 className="text-[#DB4444] font-bold">This Month</h1>
                </div>

                <div className="flex gap-22 ml-24 mt-8 items-center">
                    <h1 className="text-4xl font-bold">Best Selling Products</h1>

                    <div className="flex gap-1 ml-100">
                       <button className="w-30 h-12 text-white bg-[#DB4444] rounded-[5px]">View All</button>
                    </div>
                    </div>

                    <div className="flex gap-6 ml-25 mt-12">

                       <div className="w-55 h-70 bg-white">
                        <div className="w-55 h-53 bg-gray-100 rounded-[5px] flex justify-center items-center">
                          <button onClick={() => toggleFavorite(0)}
                           className="w-7 h-7 bg-white rounded-full flex items-center justify-center relative bottom-22 left-41">
                                                <Heart fill={favorites.includes(0) ? "red" : "none"}
                                    color={favorites.includes(0) ? "red" : "black"} size={16} size={16} />
                                            </button>
                                            <button className="w-7 h-7 bg-white rounded-full flex items-center justify-center relative bottom-14.5 left-34">
                                                <Eye size={16} />
                                            </button>
                        <img className="w-30 h-30 relative right-5" src="coat.png" alt="" />
                       </div>
                       <h1>The north coat</h1>
                      <div className="flex justify-center gap-5 mr-32">
                         <h4 className="text-red-600">$260</h4>
                       <h4 className="text-gray-500">$360</h4>
                      </div>
                      <div className="flex ">
                        <Star size={15} className=" text-amber-400 fill-amber-400"></Star>
                         <Star size={15} className=" text-amber-400 fill-amber-400"></Star>
                          <Star size={15} className=" text-amber-400 fill-amber-400"></Star>
                           <Star size={15} className=" text-amber-400 fill-amber-400"></Star>
                            <Star size={15} className=" text-amber-400 fill-amber-400"></Star>
                            <h4 className="ml-6 text-[13px]">(65)</h4>
                      </div>
                       </div>

                       <div className="w-55 h-70 bg-white">
                        <div className="w-55 h-53 bg-gray-100  rounded-[5px] flex justify-center items-center">
                        <button onClick={() => toggleFavorite(1)}
                         className="w-7 h-7 bg-white rounded-full flex items-center justify-center relative  bottom-22 left-43">
                                                <Heart fill={favorites.includes(1) ? "red" : "none"}
                                    color={favorites.includes(1) ? "red" : "black"} size={16} size={16} />
                                            </button>
                                            <button className="w-7 h-7 bg-white rounded-full flex items-center justify-center relative bottom-14 left-36">
                                                <Eye size={16} />
                                            </button>
                        <img className="w-35 h-25" src="bag.png" alt="" />
                       </div>
                        <h1>Gucci duffle bag</h1>
                      <div className="flex justify-center gap-4 mr-32">
                         <h4 className="text-red-600">$960</h4>
                       <h4 className="text-gray-500">$1160</h4>
                      </div>
                      <div className="flex ">
                        <Star size={15} className=" text-amber-400 fill-amber-400"></Star>
                         <Star size={15} className=" text-amber-400 fill-amber-400"></Star>
                          <Star size={15} className=" text-amber-400 fill-amber-400"></Star>
                           <Star size={15} className=" text-amber-400 fill-amber-400"></Star>
                            <Star size={15} className=" text-amber-400 fill-amber-400"></Star>
                            <h4 className="ml-6 text-[13px]">(65)</h4>
                      </div>
                       </div>

                       <div className="w-55 h-70 bg-white">
                        <div className="w-55 h-53 bg-gray-100  rounded-[5px] flex justify-center items-center">
                         <button onClick={() => toggleFavorite(2)}
                          className="w-7 h-7 bg-white rounded-full flex items-center justify-center relative bottom-22 left-46">
                                                <Heart fill={favorites.includes(2) ? "red" : "none"}
                                    color={favorites.includes(2) ? "red" : "black"} size={16} size={16} />
                                            </button>
                                            <button className="w-7 h-7 bg-white rounded-full flex items-center justify-center relative bottom-14 left-39">
                                                <Eye size={16} />
                                            </button>
                        <img className="w-40 h-20" src="band.png" alt="" />
                       </div>
                        <h1>RGB liquid CPU Cooler</h1>
                      <div className="flex justify-center gap-5 mr-32">
                         <h4 className="text-red-600">$60</h4>
                       <h4 className="text-gray-500">$170</h4>
                      </div>
                      <div className="flex ">
                        <Star size={15} className=" text-amber-400 fill-amber-400"></Star>
                         <Star size={15} className=" text-amber-400 fill-amber-400"></Star>
                          <Star size={15} className=" text-amber-400 fill-amber-400"></Star>
                           <Star size={15} className=" text-amber-400 fill-amber-400"></Star>
                            <Star size={15} className=" text-amber-400 fill-amber-400"></Star>
                            <h4 className="ml-6 text-[13px]">(65)</h4>
                      </div>
                       </div>

                       <div className="w-55 h-70 bg-white">
                        <div className="w-55 h-53 bg-gray-100  rounded-[5px] flex justify-center items-center">
                         <button onClick={() => toggleFavorite(3)}
                          className="w-7 h-7 bg-white rounded-full flex items-center justify-center relative bottom-22 left-41">
                                                <Heart fill={favorites.includes(3) ? "red" : "none"}
                                    color={favorites.includes(3) ? "red" : "black"} size={16} size={16} />
                                            </button>
                                            <button className="w-7 h-7 bg-white rounded-full flex items-center justify-center relative bottom-14 left-34">
                                                <Eye size={16} />
                                            </button>
                        <img className="w-30 h-35" src="div.png" alt="" />
                        </div>
                         <h1>Small BookSelf</h1>
                      <div className="flex justify-center gap-5 mr-32">
                         <h4 className="text-red-600 mr-12">$360</h4>
                      </div>
                      <div className="flex ">
                        <Star size={15} className=" text-amber-400 fill-amber-400"></Star>
                         <Star size={15} className=" text-amber-400 fill-amber-400"></Star>
                          <Star size={15} className=" text-amber-400 fill-amber-400"></Star>
                           <Star size={15} className=" text-amber-400 fill-amber-400"></Star>
                            <Star size={15} className=" text-amber-400 fill-amber-400"></Star>
                            <h4 className="ml-6 text-[13px]">(65)</h4>
                      </div>
                       </div>
                    </div>
        </div>
        </>
    )
}
export default Thismonth