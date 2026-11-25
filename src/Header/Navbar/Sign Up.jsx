import { FcGoogle } from "react-icons/fc"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
function SignUp() {
    const navigate = useNavigate();

    const handleSignUp = () => {
        localStorage.setItem("isLoggedIn", "true");
        window.dispatchEvent(new Event("loginUpdate"));

        navigate("/");
    };
    return (
        <>
            <div className="mt-12 flex gap-26">

                <div>
                    <img src="side.png" alt=""
                        className="w-150"
                    />
                </div>

                <div className="w-100 h-120 bg-white mt-10">
                    <h1 className="text-[35px] mt-2">Create an account</h1>
                    <h2 className="mt-2">Enter your details below</h2>

                    <input type="text" placeholder="Name"
                        className="w-80 h-10 mt-9 border-b-1 border-black"
                    />
                    <input type="text" placeholder="Email or Phone Number"
                        className="w-80 h-10 mt-5 border-b-1 border-black"
                    />
                    <input type="text" placeholder="Password"
                        className="w-80 h-10 mt-5 border-b-1 border-black"
                    />
                    <button
                        onClick={handleSignUp}
                        className="w-80 h-10 mt-8 bg-[#DB4444] text-white rounded-[5px]"
                    >
                        Create Account
                    </button>
                    <button className="w-80 h-10 mt-5 bg-white rounded-[5px] border-1 border-black">
                        <h1 className="mt-2 text-[14px] ml-5">Sign up with Google</h1>
                        <FcGoogle size={23} className="relative bottom-5 left-19"></FcGoogle></button>

                    <div className="flex justify-center mt-5">
                        <p className="relative right-12 text-[14px]">Already have account?</p>
                        <Link to={"/login"}>
                            <h1 className="relative right-9 text-[14px]">Log in</h1>
                        </Link>
                    </div>
                </div>

            </div>
        </>
    )
}
export default SignUp