function OurStory() {
  return (
    <section className="w-full bg-white px-6 py-10">

      <div className="mx-auto max-w-[1170px]">

        {/* Breadcrumb */}
        <div className="mb-12 flex items-center gap-3 text-[13px] text-[#555]">
          <span>Home</span>
          <span>/</span>
          <span className="text-black">About</span>
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

    </section>
  );
}

export default OurStory;