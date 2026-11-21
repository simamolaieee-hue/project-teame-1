function Featured() {
    return (
        <>
            <div className="mt-12">
                <div className="ml-25 flex gap-5 items-center">
                    <div className="w-5 h-10 bg-[#DB4444] rounded-[5px]"></div>
                    <h1 className="text-[#DB4444] font-bold">Featured</h1>
                </div>
                <h1 className="text-4xl font-bold ml-25 mt-5">New Arrival</h1>

                <div className="flex gap-5 justify-center mt-13 ml-3">
                    <div>
                        <img src="frame2.png" alt=""
                            className="w-117 h-120" />
                    </div>
                    <div>
                        <img src="frame1.png" alt=""
                            className="w-120" />

                        <div className="flex gap-5 mt-5">
                            <img src="frame3.png" alt=""
                                className="w-58 h-55" />
                            <img src="frame4.png" alt=""
                                className="w-58 h-55" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center gap-15  mt-28">
                <div className="flex-col flex justify-center items-center w-65 h-40 ">
                    <img src="ser2.png" alt=""
                    className="w-20 h-20" />
                    <h1 className="font-bold text-[19px] mt-5">FREE AND FAST DELIVERY</h1>
                    <h1>Free delivery for all orders over $140</h1>
                </div>
                 <div className="flex-col flex justify-center items-center w-65 h-40 ">
                    <img src="ser1.png" alt=""
                    className="w-20 h-20" />
                    <h1 className="font-bold text-[19px] mt-5">FREE AND FAST DELIVERY</h1>
                    <h1>Free delivery for all orders over $140</h1>
                </div>
                 <div className="flex-col flex justify-center items-center w-65 h-40">
                    <img src="ser.png" alt=""
                    className="w-20 h-20" />
                    <h1 className="font-bold text-[19px] mt-5">FREE AND FAST DELIVERY</h1>
                    <h1>Free delivery for all orders over $140</h1>
                </div>
                
            </div>
        </>
    )
}
export default Featured