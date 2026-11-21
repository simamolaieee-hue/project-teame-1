function Picturebetween(){
    return(
        <>
        <div className="w-240 h-100 bg-black mx-23 mt-25 flex">
             <div className="mt-15 ml-10">
                <h5 className="text-[#00FF66] font-bold mb-4">Categories</h5>
                <div className="w-90"><h1 className="text-white text-[40px] font-bold">Enhance Your Music Experience</h1></div>
            </div>

            <div>
                <img src="frame.png" alt=""
                className="w-[550px] h-70 ml-40 "/>
            </div>

            <div className=" flex gap-4 items-end relative right-168 mb-30">
                <div className="w-13 h-13 rounded-4xl bg-white flex flex-col justify-center items-center">
                    <h1 className="font-bold">23</h1>
                    <h6 className=" text-[12px]">Hours</h6></div>
                    <div className="w-13 h-13 rounded-4xl bg-white flex flex-col justify-center items-center">
                    <h1 className="font-bold">05</h1>
                    <h6 className=" text-[12px]">Days</h6></div>
                    <div className="w-13 h-13 rounded-4xl bg-white flex flex-col justify-center items-center">
                    <h1 className="font-bold">59</h1>
                    <h6 className="text-[12px]">Minutes</h6></div>
                    <div className="w-13 h-13 rounded-4xl bg-white flex flex-col justify-center items-center">
                    <h1 className="font-bold">35</h1>
                    <h6 className="text-[12px]">Seconds</h6></div>
            </div>
        </div>
        <div className="w-35 h-12 bg-[#00FF66] rounded-[4px] relative bottom-24 left-32 text-white flex items-center justify-center">Buy Now!</div>
        </>
    )
}
export default Picturebetween