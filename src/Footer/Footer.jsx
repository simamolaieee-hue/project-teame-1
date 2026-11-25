import { Copy, CopyCheckIcon, CopyrightIcon, CopyX, Send, SendIcon, SendToBack } from "lucide-react"
import { BiSend } from "react-icons/bi"
import { BsTwitter } from "react-icons/bs"
import { CgTwitter } from "react-icons/cg"
import { FaFacebook, FaFacebookF } from "react-icons/fa"
import { LiaLinkedinIn } from "react-icons/lia"
import { PiLinkedinLogo, PiTwitterLogo } from "react-icons/pi"
import { RxInstagramLogo } from "react-icons/rx"

function Footer(){
    return(
        <>
        <div className="w-full h-90 bg-black mt-30">

           <div  className=" flex justify-center items-center gap-18">
             <div className="flex flex-col text-white gap-2.5 mt-15">
                <div className="flex flex-col gap-4.5">
                    <h1 className="font-bold text-[24px]">Exclusive</h1>
                    <h1 className="text-[20px] font-medium">Subscribe</h1>
                    <h1 className="text-[14px]">Get 10% off your first order</h1>
                </div>
                <input type="text" placeholder="Enter your email"
                className="h-10 border-1 border-white rounded-[3px]"
                 />
                 <BiSend size={25} className="relative bottom-10 left-35"></BiSend>
            </div>

            <div className="text-white flex flex-col  gap-3.5">
                <h1 className="mb-1 text-[20px] font-medium">Support</h1>
                <div className="w-45 flex flex-col gap-2">
                    <h1>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</h1>
                    <h1>exclusive@gmail.com</h1>
                    <h1>+88015-88888-9999</h1>
                </div>
            </div>

            <div className="text-white flex flex-col gap-3 mt-7">
                <h1 className="mb-1 text-[20px] font-medium">Account</h1>
                <div className="flex flex-col gap-2">
                    <h1>My Account</h1>
                    <h1>Login / Register</h1>
                    <h1>Cart</h1>
                    <h1>Wishlist</h1>
                    <h1>Shop</h1>
                </div>
            </div>

             <div className="text-white flex flex-col gap-3">
                <h1 className="mb-1 text-[20px] font-medium">Quick Link</h1>
                <div className="flex flex-col gap-2">
                    <h1>Privacy Policy</h1>
                    <h1>Terms Of Use</h1>
                    <h1>FAQ</h1>
                    <h1>Contact</h1>
                </div>
            </div>

            <div className="flex-col">
                <h1 className="text-white text-[20px] font-medium">Download App</h1>
                <h6 className="text-[11px] text-gray-400 mt-4 mb-1">Save $3 with App New User Only</h6>
                <div className="flex">
                    <img className="w-16 h-16" src="qrc.png" alt="" />
                    <div className="flex flex-col  gap-1 ml-1 mt-0.5">
                    <img className="w-23 h-7" src="googlp.png" alt="" />
                    <img className="w23 h-7" src="apps.png" alt="" />
                </div>
                </div>
                <div className="flex gap-6 mt-5">
                    <FaFacebookF className="text-white" size={18}></FaFacebookF>
                    <PiTwitterLogo className="text-white" size={21}></PiTwitterLogo>
                    <RxInstagramLogo className="text-white" size={20}></RxInstagramLogo>
                    <LiaLinkedinIn className="text-white" size={21}></LiaLinkedinIn>
                </div>
            </div>
           </div>
            <div className="w-full h-[0.4px] bg-gray-800 mt-10"></div>
            <div className="flex gap-1 text-gray-800 text-center justify-center mt-4">
                <CopyrightIcon size={17}></CopyrightIcon>
                <h1 className="text-[14px]">Copyright Rimel 2022. All right reserved</h1>
            </div>
        </div>
        </>
    )
}
export default Footer
