 
function AboutUs() 
{
    return (

<div className="bg-[#f6f3ef] text-gray-800">
      {/* Hero Section */}
      <section className="relative text-white bg-black">
        <div className="relative h-[80vh] flex flex-col items-center justify-center text-center px-6">
          <div className="absolute inset-0">
            <img
              src="/assets/mainimage.png" // Replace with your image path
              alt="Adarsh Mutton Shop"
              className="w-full h-full object-cover opacity-40"
            />
          </div>

        {/* Text */}
        <div className="relative z-10 flex flex-col items-start justify-center max-w-7xl w-full px-4 md:px-12">
            <h2 className="text-3xl md:text-7xl leading-tight">OUR</h2>
            <h2 className="text-3xl md:text-7xl leading-tight">LEGACY</h2>
            <p className="text-xl md:text-4xl italic text-red-400 pt-3">Since 1972</p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="max-w-8xl mx-auto py-16 text-center px-4">
       
        <div className="flex flex-col items-center">
           <h3 className="text-2xl font-semibold mb-4">
          Mr. ASHOK UDARAMJI MADNE
        </h3>
          <img
            src="/images/founder.jpg" // Replace with your founder image
            alt="Founder"
            className="w-48 h-48 object-cover rounded-lg border-4 border-gray-400 mb-6"
          />
          <p className="text-gray-700 leading-relaxed max-w-3xl">
            Established in 1972 in Nagpur, serving the city for over five decades. 
            Specializing in premium quality, 100% halal goat meat, trusted by famous 
            hotels, businesses, and regular customers. Known for freshness, hygiene, 
            and authentic taste. Committed to maintaining high standards and customer trust.
          </p>
        </div>
      </section>

      {/* Owner Section */}
      <section className="bg-[#f6f3ef] py-16 px-4 text-center">
        <h4 className="text-xl text-red-500 italic mb-2">Owner</h4>
        <h3 className="text-2xl font-semibold mb-6">Mr. ASHISH ASHOK MADNE</h3>
        <div className="flex flex-col items-center mb-12">
          <div className="w-40 h-48 border-2 border-black mb-4"></div>
          <p className="max-w-3xl text-gray-700 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            It has survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged.
          </p>
        </div>

        <h4 className="text-xl text-red-500 italic mb-2">Co-Owner</h4>
        <h3 className="text-2xl font-semibold mb-6">Mr. VAIBHAV ASHOK MADNE</h3>
        <div className="flex flex-col items-center">
          <div className="w-40 h-48 border-2 border-black mb-4"></div>
          <p className="max-w-3xl text-gray-700 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            It has survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged.
          </p>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 text-center">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 px-4">
          <div className="w-full md:w-1/2 h-72">
            <iframe
              title="Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.1193!2d79.078!3d21.1458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDA4JzQ1LjAiTiA3OcKwMDQnMzguMCJF!5e0!3m2!1sen!2sin!4v0000000000000"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg border"
            ></iframe>
          </div>
          <div className="md:w-1/2 text-left">
            <h3 className="italic text-gray-800 mb-2">Our Location</h3>
            <p className="text-gray-600">
              Since 1972 we are serving at the same location.  
              Originality remains unchanged.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}

    </div>

    );
}

export default AboutUs