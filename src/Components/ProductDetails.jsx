import React, { useState } from "react";
import {
  Star,
  Heart,
  Truck,
  RotateCcw,
  Minus,
  Plus,
} from "lucide-react";

function ProductDetails() {
  const [quantity, setQuantity] = useState(2);
  const [isFavorite, setIsFavorite] = useState(false);
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("#A0CBE8");
  const [rating, setRating] = useState(4);

  return (
    <div className="w-full min-h-screen bg-white">
      <div className="max-w-[1170px] mx-auto px-5 py-12">

        {/* Breadcrumb */}
        <div className="flex items-center gap-3 text-sm text-gray-500 mb-10">
        <a
            href="/"
            className="text-gray-500 hover:text-red-500 transition-colors"
          >
           Acount
          </a>

          <span>/</span>
          <a
            href="/"
            className="text-gray-500 hover:text-red-500 transition-colors"
          >
            Gaming
          </a>

          <span>/</span>
          <span className="text-black">Havic HV G-92 Gamepad</span>
        </div>

        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-14 items-start">

          {/* Left Images */}
          <div className="grid grid-cols-[100px_minmax(0,1fr)] gap-5 h-[380px] lg:h-[520px]">

            {/* Small Images */}
            <div className="grid grid-rows-4 gap-4 h-full">
              {[
                "/images/gamepad-1.png",
                "/images/gamepad-2.png",
                "/images/gamepad-3.png",
                "/images/gamepad-4.png",
              ].map((image, index) => (
                <div
                  key={index}
                  className="w-full h-full bg-[#F5F5F5] rounded-sm flex items-center justify-center overflow-hidden"
                >
                  <img
                    src={image}
                    alt={`Gamepad view ${index + 1}`}
                    className="w-full h-full object-contain p-2"
                  />
                </div>
              ))}
            </div>

            {/* Main Image */}
            <div className="w-full h-full bg-[#F5F5F5] rounded-sm flex items-center justify-center overflow-hidden">
              <img
                src="/images/gamepad-main.png"
                alt="Havic HV G-92 Gamepad"
                className="w-full h-full object-contain p-5"
              />
            </div>
          </div>

          {/* Right Information */}
          <div className="w-full flex flex-col justify-between lg:h-[520px]">

            {/* Product Information */}
            <div>
              {/* Product Name */}
              <h1 className="text-2xl font-semibold text-black mb-3">
                Havic HV G-92 Gamepad
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      aria-label={`امتیاز ${star} از 5`}
                    >
                      <Star
                        size={17}
                        fill={star <= rating ? "currentColor" : "none"}
                        className={
                          star <= rating
                            ? "text-[#FFAD33]"
                            : "text-gray-300"
                        }
                      />
                    </button>
                  ))}
                </div>

                <span className="text-sm text-gray-500">
                  (150 Reviews)
                </span>

                <span className="text-gray-300">|</span>

                <span className="text-sm text-[#00A650]">
                  In Stock
                </span>
              </div>

              {/* Price */}
              <h2 className="text-2xl text-black mb-3">
                $192.00
              </h2>

              {/* Description */}
              <p className="text-sm leading-6 text-black pb-4 border-b border-gray-300">
                PlayStation 5 Controller Skin High quality vinyl with air
                channel adhe
sive for easy bubble free install & mess
                free removal Pressure sensitive.
              </p>

              {/* Colours */}
              <div className="flex items-center gap-4 mt-4 mb-4">
                <span className="text-lg text-black">
                  Colours:
                </span>

                <div className="flex items-center gap-2">
                  {["#A0CBE8", "#E07596"].map((color) => (
                    <button
                      key={color}
                      type="button"
                      onClick={() => setSelectedColor(color)}
                      className={`w-5 h-5 rounded-full transition ${
                        selectedColor === color
                          ? "border-2 border-black ring-1 ring-white"
                          : "border border-transparent"
                      }`}
                      style={{ backgroundColor: color }}
                      aria-label={`انتخاب رنگ ${color}`}
                    />
                  ))}
                </div>
              </div>

              {/* Sizes */}
              <div className="flex items-center gap-4 mb-4">
                <span className="text-lg text-black">
                  Size:
                </span>

                <div className="flex items-center gap-2">
                  {["XS", "S", "M", "L", "XL"].map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={`w-8 h-8 border rounded text-sm transition ${
                        selectedSize === size
                          ? "bg-[#DB4444] text-white border-[#DB4444]"
                          : "border-gray-400 text-black hover:bg-[#DB4444] hover:text-white hover:border-[#DB4444]"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity and Buttons */}
              <div className="flex flex-wrap items-center gap-4 mb-5">
                <div className="flex items-center h-11 border border-gray-400 rounded-sm overflow-hidden">
                  <button
                    type="button"
                    onClick={() =>
                      setQuantity((prev) => Math.max(1, prev - 1))
                    }
                    className="w-10 h-full flex items-center justify-center hover:bg-gray-100 transition"
                  >
                    <Minus size={17} />
                  </button>

                  <span className="w-12 h-full flex items-center justify-center border-x border-gray-400 text-base">
                    {quantity}
                  </span>

                  <button
                    type="button"
                    onClick={() => setQuantity((prev) => prev + 1)}
                    className="w-10 h-full flex items-center justify-center bg-[#DB4444] text-white hover:bg-[#c73535] transition"
                  >
                    <Plus size={18} />
                  </button>
                </div>

                <button
                  type="button"
                  className="h-11 px-10 bg-[#DB4444] text-white rounded-sm text-sm font-medium hover:bg-[#c73535] transition"
                >
                  Buy Now
                </button>

                <button
                  type="button"
                  onClick={() => setIsFavorite((prev) => !prev)}
                  className="w-11 h-11 border border-gray-400 rounded-sm flex items-center justify-center hover:bg-gray-100 transition"
                  aria-label="افزودن به علاقه‌مندی‌ها"
                >
                  <Heart
                    size={21}
                    fill={isFavorite ? "#DB4444" : "none"}
                    className={isFavorite ? "text-[#DB4444]" : "text-black"}
                  />
                </button>
              </div>
            </div>

            {/* Delivery Box */}
            <div className="border border-gray-400 rounded-sm">
              <div className="flex items-center gap-5 p-4 border-b border-gray-300">
                <Truck size={32} strokeWidth={1.5} />

                <div>
                  <h3 className="text-base font-medium text-black mb-1">
                    Free Delivery
                  </h3>

                  <p className="text-xs text-gray-600 underline">
                    Enter your postal code for Delivery Availability
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5 p-4">
                <RotateCcw size={32} strokeWidth={1.5} />

                <div>
                  <h3 className="text-base font-medium text-black mb-1">
                    Return Delivery
                  </h3>

                  <p className="text-xs text-gray-600">
                    Free 30 Days Delivery Returns. Details
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
  


{/* Related Items */}
<div className="w-full mt-28">

  <div className="flex items-center gap-4 mb-10">
    <div className="w-5 h-11 bg-[#DB4444] rounded-sm"></div>
    <h2 className="text-base font-semibold text-[#DB4444]">
      Related Item
    </h2>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">

    {/* Product 1 */}
    <div className="w-full">
      <img
        src="/images/related-gamepad.png"
        alt="HAVIT HV-G92 Gamepad"
        className="w-full h-[250px] object-contain"
      />

      <h3 className="text-base font-medium text-black mt-4">
        HAVIT HV-G92 Gamepad
      </h3>

      <div className="flex items-center gap-3 mt-2">
        <span className="text-[#DB4444]">$120</span>
        <span className="text-gray-400 line-through">$160</span>
      </div>

      <div className="flex items-center gap-2 mt-2">
        <div className="flex text-[#FFAD33]">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} size={16} fill="currentColor" strokeWidth={0} />
          ))}
        </div>
        <span className="text-sm text-gray-400">(88)</span>
      </div>
    </div>

    {/* Product 2 */}
    <div className="w-full">
      <img
        src="/images/related-keyboard.png"
        alt="AK-900 Wired Keyboard"
        className="w-full h-[250px] object-contain"
      />

      <h3 className="text-base font-medium text-black mt-4">
        AK-900 Wired Keyboard
      </h3>

      <div className="flex items-center gap-3 mt-2">
        <span className="text-[#DB4444]">$960</span>
        <span className="text-gray-400 line-through">$1160</span>
      </div>

      <div className="flex items-center gap-2 mt-2">
        <div className="flex text-[#FFAD33]">
          {[1, 2, 3, 4].map((star) => (
            <Star key={star} size={16} fill="currentColor" strokeWidth={0} />
          ))}
          <Star size={16} className="text-gray-300" fill="currentColor" strokeWidth={0} />
        </div>
        <span className="text-sm text-gray-400">(75)</span>
      </div>
    </div>

    {/* Product 3 */}
    <div className="w-full">
      <img
        src="/images/related-monitor.png"
        alt="IPS LCD Gaming Monitor"
        className="w-full h-[250px] object-contain"
      />

      <h3 className="text-base font-medium text-black mt-4">
        IPS LCD Gaming Monitor
      </h3>

      <div className="flex items-center gap-3 mt-2">
        <span className="text-[#DB4444]">$370</span>
        <span className="text-gray-400 line-through">$400</span>
      </div>

      <div className="flex items-center gap-2 mt-2">
        <div className="flex text-[#FFAD33]">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} size={16} fill="currentColor" strokeWidth={0} />
          ))}
        </div>
        <span className="text-sm text-gray-400">(99)</span>
      </div>
    </div>

    {/* Product 4 */}
    <div className="w-full">
      <img
        src="/images/related-cooler.png"
        alt="RGB Liquid CPU Cooler"
        className="w-full h-[250px] object-contain"
      />

      <h3 className="text-base font-medium text-black mt-4">
        RGB Liquid CPU Cooler
      </h3>

      <div className="flex items-center gap-3 mt-2">
        <span className="text-[#DB4444]">$160</span>
        <span className="text-gray-400 line-through">$170</span>
      </div>

      <div className="flex items-center gap-2 mt-2">
        <div className="flex text-[#FFAD33]">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} size={16} fill="currentColor" strokeWidth={0} />
          ))}
        </div>
        <span className="text-sm text-gray-400">(65)</span>
      </div>
    </div>

  </div>
</div>
        
      </div>
    </div>
  );
}

export default ProductDetails;