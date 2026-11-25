import React from "react";
import { useNavigate } from "react-router-dom";
import { Phone, Mail } from "lucide-react";

function Contact() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/not-found");
  };

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
            contact
          </span>

        </div>

      
        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-10 md:gap-[70px] mt-32 mb-32">




          <div className="w-full">

        
            <div className="pb-8 border-b border-gray-300">

              <div className="flex items-center gap-4 mb-6">

                <div className="w-10 h-10 rounded-full bg-[#DB4444] flex items-center justify-center">
                  <Phone size={20} className="text-white" />
                </div>

                <h3 className="font-medium text-base text-black">
                  Call To Us
                </h3>

              </div>

              <p className="text-sm text-black mb-4">
                We are available 24/7, 7 days a week.
              </p>

              <p className="text-sm text-black">
                Phone: +8801611112222
              </p>

            </div>





            <div className="pt-8">

              <div className="flex items-center gap-4 mb-6">

                <div className="w-10 h-10 rounded-full bg-[#DB4444] flex items-center justify-center">
                  <Mail size={20} className="text-white" />
                </div>

                <h3 className="font-medium text-base text-black">
                  Write To Us
                </h3>

              </div>

              <p className="text-sm text-black leading-6 mb-4">
                Fill out our form and we will contact you
                within 24 hours.
              </p>

              <p className="text-sm text-black mb-4">
                Emails: customer@exclusive.com
              </p>

              <p className="text-sm text-black">
                Emails: support@exclusive.com
              </p>

            </div>

          </div>


          <div className="w-full">

            <form onSubmit={handleSubmit}>

           
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">

                <input
                  type="text"
                  placeholder="Your Name *"
                  required
                  className="w-full h-[50px] bg-[#F5F5F5] px-4 text-sm text-black placeholder:text-gray-500 rounded-sm outline-none focus:ring-1 focus:ring-[#DB4444]"
                />

                <input
                  type="email"
                  placeholder="Your Email *"
                  required
                  className="w-full h-[50px] bg-[#F5F5F5] px-4 text-sm text-black placeholder:text-gray-500 rounded-sm outline-none focus:ring-1 focus:ring-[#DB4444]"
                />

                <input
                  type="tel"
                  placeholder="Your Phone *"
                  required
                  className="w-full h-[50px] bg-[#F5F5F5] px-4 text-sm text-black placeholder:text-gray-500 rounded-sm outline-none focus:ring-1 focus:ring-[#DB4444]"
                />

              </div>

        
              <textarea
                placeholder="Your Message"
                required
                className="w-full h-[207px] bg-[#F5F5F5] p-4 text-sm text-black placeholder:text-gray-500 rounded-sm outline-none resize-none focus:ring-1 focus:ring-[#DB4444]"
              />

          
              <div className="flex justify-end mt-8">

                <button
                  type="submit"
                  className="bg-[#DB4444] hover:bg-[#c73535] text-white text-sm font-medium px-12 py-4 rounded-sm transition-all duration-300 cursor-pointer"
                >
                  Send Message
                </button>

              </div>

            </form>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Contact;