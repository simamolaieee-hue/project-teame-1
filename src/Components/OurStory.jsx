import { FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";


function OurStory() {
  return (
    <section className="w-full bg-white px-6 py-10">

      <div className="mx-auto max-w-[1170px]">

        {/* Breadcrumb */}
        <div className="mb-12 flex items-center gap-3 text-[13px] text-[#555]">
            <a
            href="/"
            className="text-gray-500 hover:text-red-500 transition-colors"
          >
            Home
          </a>

          <span className="text-gray-400">/</span>

          <span className="text-black font-medium">
          About
          </span>
        </div>

        {/* Main Section */}
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">

          {/* Text */}
          <div className="max-w-[480px] text-left">

            <h1 className="mb-8 text-[46px] font-semibold leading-tight text-[#111]">
              Our Story
            </h1>

            <p className="mb-6 text-[15px] leading-[26px] text-[#333]">
             Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported 
              by wide range of tailored marketing, data and service solutions,
               Exclusive has 10,500 sallers and 300 brands and serves 3
                millioons customers across the region. 
            </p>

            <p className="text-[15px] leading-[26px] text-[#333]">
             Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
               ranging  from consumer.
            </p>

          </div>

          {/* Image */}
          <div className="flex justify-end">

            <img
              src="/images/our-story.jpg"
              alt="Our Story"
              className="h-[460px] w-full max-w-[550px] rounded-[3px] object-cover"
            />

          </div>

        </div>

      </div>


















      <div className="grid  sm:grid-cols-2 lg:grid-cols-4 flex justify-center gap-0 mt-16">

  {[
    {
      icon: "/images/store.png",
      number: "10.5k",
      title: "Sallers active our site",
      active: false,
    },
    {
      icon: "/images/sales.png",
      number: "33k",
      title: "Monthly Product Sale",
      active: true,
    },
    {
      icon: "/images/customers.png",
      number: "45.5k",
      title: "Customer active in our site",
      active: false,
    },
    {
      icon: "/images/gross-sales.png",
      number: "25k",
      title: "Annual gross sale in our site",
      active: false,
    },
  ].map((item, index) => (
    <div
      key={index}
      className={`w-[200px] h-[200px] border flex flex-col items-center justify-center transition-all duration-300 ${
        item.active
          ? "bg-[#DB4444] border-[#DB4444] text-white"
          : "bg-white border-gray-300 text-black"
      }`}
    >

      <img
        src={item.icon}
        alt="icon"
        className="w-10 h-10 object-contain mt-2 mb-3"
      />

      <h2 className="text-2xl font-bold mb-1">
        {item.number}
      </h2>

      <p className="text-xs text-center px-2">
        {item.title}
      </p>

    </div>
  ))}

</div>









<div className="w-full max-w-[1170px] mx-auto mt-20 px-4">

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

    {[
      {
        image: "/images/tom.jpg",
        name: "Tom Cruise",
        role: "Founder & Chairman",
      },
      {
        image: "/images/emma.jpg",
        name: "Emma Watson",
        role: "Managing Director",
      },
      {
        image: "/images/will.jpg",
        name: "Will Smith",
        role: "Product Designer",
      },
    ].map((person, index) => (
      <div key={index} className="flex flex-col">

        <div className="w-full h-[370px] bg-gray-100 overflow-hidden">
          <img
            src={person.image}
            alt={person.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="mt-6">

          <h2 className="text-3xl font-medium text-black">
            {person.name}
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            {person.role}
          </p>

          <div className="flex items-center gap-4 mt-4 text-gray-500">

            <a href="#" aria-label="Twitter">
              <FaTwitter size={18} />
            </a>

            <a href="#" aria-label="Instagram">
              <FaInstagram size={18} />
            </a>

            <a href="#" aria-label="LinkedIn">
              <FaLinkedinIn size={18} />
            </a>

          </div>

        </div>

      </div>
    ))}

  </div>

  <div className="flex justify-center items-center gap-2 mt-12">

    <span className="w-3 h-3 rounded-full bg-gray-300"></span>
    <span className="w-3 h-3 rounded-full bg-gray-300"></span>
    <span className="w-3 h-3 rounded-full bg-[#DB4444] border-2 border-gray-300"></span>
    <span className="w-3 h-3 rounded-full bg-gray-300"></span>
    <span className="w-3 h-3 rounded-full bg-gray-300"></span>

  </div>

</div>










<div className="w-full max-w-[1170px] mx-auto mt-24 mb-16 px-4">

  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

    <div className="flex flex-col items-center text-center">
      <img
        src="/images/delivery.png"
        alt="Delivery"
        className="w-12 h-12 object-contain mb-5"
      />

      <h3 className="text-sm font-semibold text-black uppercase">
        Free And Fast Delivery
      </h3>

      <p className="text-xs text-gray-500 mt-2">
        Free delivery for all orders over $140
      </p>
    </div>

    <div className="flex flex-col items-center text-center">
      <img
        src="/images/customer-service.png"
        alt="Customer Service"
        className="w-12 h-12 object-contain mb-5"
      />

      <h3 className="text-sm font-semibold text-black uppercase">
        24/7 Customer Service
      </h3>

      <p className="text-xs text-gray-500 mt-2">
        Friendly 24/7 customer support
      </p>
    </div>

    <div className="flex flex-col items-center text-center">
      <img
        src="/images/money-back.png"
        alt="Money Back Guarantee"
        className="w-12 h-12 object-contain mb-5"
      />

      <h3 className="text-sm font-semibold text-black uppercase">
        Money Back Guarantee
      </h3>

      <p className="text-xs text-gray-500 mt-2">
        We return money within 30 days
      </p>
    </div>

  </div>

</div>






    </section>
  );
}

export default OurStory;