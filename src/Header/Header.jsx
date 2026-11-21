import { ChevronDown, Heart, Search, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <div>

                <div className="w-full h-10 bg-black flex justify-center items-center gap-10">
                    <div className="flex gap-2">
                        <h2 className="text-white text-[12px]">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</h2>
                        <h1 className="text-white text-[13px] relative bottom-0.5 underline decoration-white underline-offset-2">ShopNow</h1>
                    </div>

                    <div className="flex relative left-50">
                        <h1 className="text-white text-[14px]">English</h1>
                        <ChevronDown className="text-white mt-1" size={18}></ChevronDown>
                    </div>
                </div>

                <div className="w-full h-20 flex justify-center items-center gap-33 border-b-1 border-gray-300">

                    <div className=""><h1>Exclusive</h1></div>

                    <div className="flex gap-10">
                        <Link to={"/"}>
                            <h1>Home</h1>
                        </Link>

                        <Link to={"/contact"}>
                            <h1>Contact</h1>
                        </Link>

                        <Link to={"/about"}>
                            <h1>About</h1>
                        </Link>

                        <Link to={"/signup"}>
                            <h1>Sign Up</h1>
                        </Link>
                    </div>

                    <div className="flex gap-5 ">
                        <input type="text" placeholder="What are you looking for?"
                            className="bg-[#F5F5F5] w-50 h-7 rounded-[4px] placeholder:text-[11px] placeholder:text-center placeholder:indent-[-25px]" />
                        <Search size={16} className="absolute right-54 top-18"></Search>
                        <Heart size={20}></Heart>
                        <ShoppingCart size={20}></ShoppingCart>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Header;