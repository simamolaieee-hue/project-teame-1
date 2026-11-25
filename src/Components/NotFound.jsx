import React from "react";

function NotFound() {
  return (
    <div className="w-full min-h-screen bg-white">

      
      <div className="max-w-[1170px] mx-auto px-6">



       
        <div className="flex items-center gap-3 pt-16 text-sm">
          <a
            href="/"
            className="text-gray-500 hover:text-red-500 transition-colors"
          >
            Home
          </a>

          <span className="text-gray-400">/</span>

          <span className="text-black font-medium">
            404 Error
          </span>
        </div>

             





        <div className="flex flex-col items-center justify-center text-center py-32">

          <h1 className="text-6xl md:text-8xl lg:text-[110px] font-medium tracking-wide text-black">
            404 Not Found
          </h1>

          <p className="text-gray-600 text-sm md:text-base mt-8">
           Your visited page not found. You may go home page.
          </p>

         <button
  onClick={() => window.location.href = "/"}
  className="mt-20 bg-[#DB4444] hover:bg-[#c73535] text-white px-12 py-4 rounded-sm transition-all duration-300 text-base cursor-pointer"
>
  Back to home page
</button>

        </div>

      </div>
    </div>
  );
}

export default NotFound;