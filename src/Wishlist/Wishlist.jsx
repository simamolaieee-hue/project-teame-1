import { useNavigate } from 'react-router-dom';
import { useState } from "react";

function Wishlist() {
    const navigate = useNavigate();
    const [favorites, setFavorites] = useState(() => {
        return JSON.parse(localStorage.getItem("wishlist")) || [];

    });

    const goToCart = () => {
        navigate('/cart');
    };

    return (
        <div className="w-full flex flex-col pb-10">

            <div className="justify-between w-full h-40 p-4 flex flex-row items-center">
                <h2 className="text-xl text-black ml-25">
                    Wishlist ({favorites.length})
                </h2>
                <button className="mr-25 h-15 w-50 flex items-center justify-center text-[#000000] rounded border border-[#00000080]">
                    Move All To Bag
                </button>
            </div>


            <div className="flex flex-row flex-wrap items-center justify-center gap-5 h-auto">


                <div className="w-100 bg-[#F5F5F5] rounded p-4">
                    <div className="flex flex-row justify-between w-full">
                        <button className="bg-red-500 rounded text-white w-20 h-10">-35%</button>
                        <img src="Fill Eye.png" className="w-10 h-10" alt="eye" />
                    </div>
                    <div className="flex items-center justify-center h-30">
                        <img src="Frame 609.png" alt="product" />
                    </div>
                    <button onClick={goToCart} className="w-full mt-11 flex items-center justify-center gap-5 h-15 bg-[#000000] rounded text-white text-[20px]">
                        <img src="Cart1.png" className="w-11 h-11" alt="cart" />
                        Add To Cart
                    </button>
                </div>


                <div className="w-100 bg-[#F5F5F5] rounded p-4">
                    <div className="flex flex-row justify-between w-full">
                        <button className="bg-[#F5F5F5] rounded text-white w-20 h-10">-35%</button>
                        <img src="Fill Eye.png" className="w-10 h-10" alt="eye" />
                    </div>
                    <div className="flex items-center justify-center h-30">
                        <img src="gammaxx-l240-argb-1-500x500 1.png" alt="product" />
                    </div>
                    <button onClick={goToCart} className="w-full mt-11 flex items-center justify-center gap-5 h-15 bg-[#000000] rounded text-white text-[20px]">
                        <img src="Cart1.png" className="w-11 h-11" alt="cart" />
                        Add To Cart
                    </button>
                </div>


                <div className="w-100 bg-[#F5F5F5] rounded p-4">
                    <div className="flex flex-row justify-between w-full">
                        <button className="bg-[#F5F5F5] rounded text-white w-20 h-10">-35%</button>
                        <img src="Fill Eye.png" className="w-10 h-10" alt="eye" />
                    </div>
                    <div className="flex items-center justify-center h-30">
                        <img src="GP11_PRD3 1.png" alt="product" />
                    </div>
                    <button onClick={goToCart} className="w-full mt-11 flex items-center justify-center gap-5 h-15 bg-[#000000] rounded text-white text-[20px]">
                        <img src="Cart1.png" className="w-11 h-11" alt="cart" />
                        Add To Cart
                    </button>
                </div>


                <div className="w-100 bg-[#F5F5F5] rounded p-4">
                    <div className="flex flex-row justify-between w-full">
                        <button className="bg-[#F5F5F5] rounded text-white w-20 h-10">-35%</button>
                        <img src="Fill Eye.png" className="w-10 h-10" alt="eye" />
                    </div>
                    <div className="flex items-center justify-center h-30">
                        <img src="Frame 608.png" alt="product" />
                    </div>
                    <button onClick={goToCart} className="w-full mt-11 flex items-center justify-center gap-5 h-15 bg-[#000000] rounded text-white text-[20px]">
                        <img src="Cart1.png" className="w-11 h-11" alt="cart" />
                        Add To Cart
                    </button>
                </div>
            </div>


            <div className="flex flex-row flex-wrap items-center justify-center w-full h-30 gap-5 mt-10">
                {[
                    { name: "Gucci duffle bag", price: "$960", oldPrice: "$1160" },
                    { name: "RGB liquid CPU Cooler", price: "$1160", oldPrice: null },
                    { name: "GP11 Shooter USB Gamepad", price: "$560", oldPrice: null },
                    { name: "AK-900 Wired Keyboard", price: "$200", oldPrice: null }
                ].map((item, index) => (
                    <div key={index} className="w-100 h-20">
                        <div className="font-bold">{item.name}</div>
                        <div className="flex flex-row gap-4">
                            <div className="text-[#DB4444]">{item.price}</div>
                            {item.oldPrice && <div className="text-gray-500">{item.oldPrice}</div>}
                        </div>
                    </div>
                ))}
            </div>


            <div className="h-20"></div>
            <div className="justify-between w-full h-40 p-4 flex flex-row items-center">
                <div className="flex items-center gap-5">
                    <button className="bg-[#DB4444] w-8 h-15 rounded ml-25"></button>
                    <h2 className="text-xl text-black">Just For You</h2>
                </div>
                <button className="mr-25 h-15 w-50 flex items-center justify-center text-[#000000] rounded border border-[#00000080]">
                    See All
                </button>
            </div>


            <div className="flex flex-row flex-wrap items-center justify-center gap-5 h-auto">

                <div className="w-100 bg-[#F5F5F5] rounded p-4">
                    <div className="flex flex-row justify-between w-full">
                        <button className="bg-red-500 rounded text-white w-20 h-10">-35%</button>
                        <img src="Fill Eye (1).png" className="w-10 h-10" alt="eye" />
                    </div>
                    <div className="flex items-center justify-center h-30">
                        <img src="ideapad-gaming-3i-01-500x500 1.png" alt="product" />
                    </div>
                    <button onClick={goToCart} className="w-full mt-11 flex items-center justify-center gap-5 h-15 bg-[#000000] rounded text-white text-[20px]">
                        <img src="Cart1.png" className="w-11 h-11" alt="cart" />
                        Add To Cart
                    </button>
                </div>


                <div className="w-100 bg-[#F5F5F5] rounded p-4">
                    <div className="flex flex-row justify-between w-full">
                        <button className="bg-[#F5F5F5] rounded text-white w-20 h-10">-35%</button>
                        <img src="Fill Eye (1).png" className="w-10 h-10" alt="eye" />
                    </div>
                    <div className="flex items-center justify-center h-30">
                        <img src="g27cq4-500x500 1.png" alt="product" />
                    </div>
                    <button onClick={goToCart} className="w-full mt-11 flex items-center justify-center gap-5 h-15 bg-[#000000] rounded text-white text-[20px]">
                        <img src="Cart1.png" className="w-11 h-11" alt="cart" />
                        Add To Cart
                    </button>
                </div>


                <div className="w-100 bg-[#F5F5F5] rounded p-4">
                    <div className="flex flex-row justify-between w-full">
                        <button className="bg-[#00FF66] rounded text-white w-20 h-10">NEW</button>
                        <img src="Fill Eye (1).png" className="w-10 h-10" alt="eye" />
                    </div>
                    <div className="flex items-center justify-center h-30">
                        <img src="g92-2-500x500 1.png" alt="product" />
                    </div>
                    <button onClick={goToCart} className="w-full mt-11 flex items-center justify-center gap-5 h-15 bg-[#000000] rounded text-white text-[20px]">
                        <img src="Cart1.png" className="w-11 h-11" alt="cart" />
                        Add To Cart
                    </button>
                </div>


                <div className="w-100 bg-[#F5F5F5] rounded px-4 pt-4">
                    <div className="flex flex-row justify-between w-full">
                        <button className="bg-[#F5F5F5] rounded text-white w-20 h-10">-35%</button>
                        <img src="Fill Eye (1).png" className="w-10 h-10" alt="eye" />
                    </div>
                    <div className="flex items-center justify-center h-30">
                        <img src="ak-900-01-500x500 1.png" alt="product" />
                    </div>
                    <button onClick={goToCart} className="w-full mt-11 flex items-center justify-center gap-5 h-15 bg-[#000000] rounded text-white text-[20px]">
                        <img src="Cart1.png" className="w-11 h-11" alt="cart" />
                        Add To Cart
                    </button>
                </div>
            </div>

            <div className='w-full h-50 gap-5 flex flex-row items-center justify-center'>
                <div className=' w-100 h-50 '>
                    <div>ASUS FHD Gaming Laptop</div>
                    <div className='flex flex-row gap-3 mt-4'>
                        <div className='text-red-500'>$960 </div>
                        <div className='text-gray-400'>$1160</div>
                    </div>
                    <div className='flex flex-row gap-2 mt-4'>
                        <img src='Vector.png' className='h-5 w-5' />
                        <img src='Vector.png' className='h-5 w-5' />
                        <img src='Vector.png' className='h-5 w-5' />
                        <img src='Vector.png' className='h-5 w-5' />
                        <img src='Vector.png' className='h-5 w-5' />
                        <div className='text-gray-400'>(65)</div>
                    </div>

                </div>

                <div className=' w-100 h-50 '>
                    <div>IPS LCD Gaming Monitor</div>
                    <div className='flex flex-row gap-3 mt-4'>
                        <div className='text-red-500'>$1160 </div>
                    </div>
                    <div className='flex flex-row gap-2 mt-4'>
                        <img src='Vector.png' className='h-5 w-5' />
                        <img src='Vector.png' className='h-5 w-5' />
                        <img src='Vector.png' className='h-5 w-5' />
                        <img src='Vector.png' className='h-5 w-5' />
                        <img src='Vector.png' className='h-5 w-5' />
                        <div className='text-gray-400'>(65)</div>
                    </div>

                </div>

                <div className=' w-100 h-50 '>
                    <div>HAVIT HV-G92 Gamepad</div>
                    <div className='flex flex-row gap-3 mt-4'>
                        <div className='text-red-500'>$560 </div>
                    </div>
                    <div className='flex flex-row gap-2 mt-4'>
                        <img src='Vector.png' className='h-5 w-5' />
                        <img src='Vector.png' className='h-5 w-5' />
                        <img src='Vector.png' className='h-5 w-5' />
                        <img src='Vector.png' className='h-5 w-5' />
                        <img src='Vector.png' className='h-5 w-5' />
                        <div className='text-gray-400'>(65)</div>
                    </div>

                </div>

                <div className=' w-100 h-50 '>
                    <div>AK-900 Wired Keyboard</div>
                    <div className='flex flex-row gap-3 mt-4'>
                        <div className='text-red-500'>$200 </div>
                    </div>
                    <div className='flex flex-row gap-2 mt-4'>
                        <img src='Vector.png' className='h-5 w-5' />
                        <img src='Vector.png' className='h-5 w-5' />
                        <img src='Vector.png' className='h-5 w-5' />
                        <img src='Vector.png' className='h-5 w-5' />
                        <img src='Vector.png' className='h-5 w-5' />
                        <div className='text-gray-400'>(65)</div>
                    </div>

                </div>
            </div>

            <div className='flex gap-2'>
                {favorites.map((item) => (
                    <div key={item.id} className="w-70 bg-[#F5F5F5] rounded p-4">

                        <div className="flex justify-center items-center h-30">
                            <img
                                src={item.image}
                                className="w-32 h-32 object-contain"
                                alt={item.name}
                            />
                        </div>

                        <h2 className="font-bold">{item.name}</h2>
                        <p className="text-[#DB4444]">${item.price}</p>

                        <button
                            onClick={goToCart}
                            className="w-full mt-5 bg-black text-white rounded h-15"
                        >
                            Add To Cart
                        </button>

                    </div>
                ))}
            </div>
        </div>
    );
}

export default Wishlist;
