import { ChevronDown, Heart, Search, ShoppingCart, ShoppingBag, CircleX, Star, LogOut } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { UserRound } from "lucide-react";
function Header() {
    const [showProfileMenu, setShowProfileMenu] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(
        localStorage.getItem("isLoggedIn") === "true"
    );

    useEffect(() => {
        const updateLogin = () => {
            setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
        };

        window.addEventListener("loginUpdate", updateLogin);

        return () => {
            window.removeEventListener("loginUpdate", updateLogin);
        };
    }, []);

    const [count, setCount] = useState(() => {
        return JSON.parse(localStorage.getItem("wishlist"))?.length || 0;
    });

    const location = useLocation();

    useEffect(() => {
        const updateCount = () => {
            const favorites = JSON.parse(localStorage.getItem("wishlist")) || [];
            setCount(favorites.length);
        };

        window.addEventListener("wishlistUpdated", updateCount);

        return () => {
            window.removeEventListener("wishlistUpdated", updateCount);
        };
    }, []);
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
                        <Link to={"/wishlist"} className="relative">
                            <ShoppingCart size={20} />

                            {count > 0 && location.pathname !== "/wishlist" && (
                                <span className="absolute -top-2 -right-2 bg-[#DB4444] text-white w-5 h-5 rounded-full flex items-center justify-center text-[11px]">
                                    {count}
                                </span>
                            )}
                        </Link>

                        {isLoggedIn && (
                            <div className="relative">

                                {/* آیکون آدم */}
                                <button
                                    onClick={() => setShowProfileMenu(!showProfileMenu)}
                                    className="w-11 h-11 bg-[#DB4444] rounded-full flex items-center justify-center"
                                >
                                    <UserRound size={22} color="white" />
                                </button>

                                {/* منوی کشویی */}
                                {showProfileMenu && (
                                    <div className="absolute right-0 top-13 w-[300px] bg-gradient-to-br from-[#aaa1aa] to-[#211522] text-white rounded-md shadow-lg z-50 py-4">

                                        <button className="w-full flex items-center gap-5 px-7 py-3 hover:bg-white/10">
                                            <UserRound size={27} />
                                            <span>Manage My Account</span>
                                        </button>

                                        <button className="w-full flex items-center gap-5 px-7 py-3 hover:bg-white/10">
                                            <ShoppingBag size={27} />
                                            <span>My Order</span>
                                        </button>

                                        <button className="w-full flex items-center gap-5 px-7 py-3 hover:bg-white/10">
                                            <CircleX size={27} />
                                            <span>My Cancellations</span>
                                        </button>

                                        <button className="w-full flex items-center gap-5 px-7 py-3 hover:bg-white/10">
                                            <Star size={27} />
                                            <span>My Reviews</span>
                                        </button>

                                        <button
                                            onClick={() => {
                                                localStorage.removeItem("isLoggedIn");
                                                window.dispatchEvent(new Event("loginUpdate"));
                                                setShowProfileMenu(false);
                                            }}
                                            className="w-full flex items-center gap-5 px-7 py-3 hover:bg-white/10"
                                        >
                                            <LogOut size={27} />
                                            <span>Logout</span>
                                        </button>

                                    </div>
                                )}

                            </div>
                        )}
                    </div>
                </div>

            </div>
        </>
    )
}
export default Header;