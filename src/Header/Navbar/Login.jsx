function Login() {
    return (
        <>
            <div className="mt-12 flex gap-26">

                <div>
                    <img src="side.png" alt=""
                    className="w-150"
                    />
                </div>

                <div className="w-100 h-120 bg-white mt-10">
                <h1 className="text-[35px] mt-2">Log in to Exclusive</h1>
                <h2 className="mt-2">Enter your details below</h2>

                <input type="text" placeholder="Email or Phone Number"
                className="w-80 h-10 mt-9 border-b-1 border-black"
                />
                 <input type="text" placeholder="Password"
                className="w-80 h-10 mt-5 border-b-1 border-black"
                />

                <div className="flex justify-center items-center gap-4 mt-10">
                    <button className="w-30 h-11 rounded-[5px] bg-[#DB4444] relative right-18 text-white">Log In</button>
                    <p className="text-[#DB4444]">Forget Password?</p>
                </div>

                </div>

            </div>
        </>
    )
}
export default Login