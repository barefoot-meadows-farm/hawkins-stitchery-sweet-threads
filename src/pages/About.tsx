
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen bg-[#FEF7CD]/30 py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#6B4226] mb-8 text-center">About Ms. Hawkins</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="md:w-1/3">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                alt="Placeholder for Ms. Hawkins" 
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="md:w-2/3">
              <h2 className="text-2xl font-serif font-bold text-[#6B4226] mb-4">A Lifetime of Craftsmanship</h2>
              <p className="text-lg text-gray-700 mb-4">
                Ms. Hawkins discovered her passion for sewing at the age of 10, when her grandmother taught her how to thread a needle and make her first stitch. That early lesson blossomed into a lifelong love of fabric, thread, and the art of transformation.
              </p>
              <p className="text-lg text-gray-700">
                With over 65 years of experience, she has developed an expert eye for detail and a steady hand that can tackle any alteration or sewing project. Her traditional techniques combined with contemporary knowledge ensure that every piece she works on is treated with the utmost care.
              </p>
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-serif font-bold text-[#6B4226] mb-4">Our Approach</h2>
            <p className="text-lg text-gray-700 mb-4">
              At Hawkins Little Stitchery, we believe that quality alterations and custom sewing should be accessible to everyone. Each garment is treated with personal attention and care, ensuring that the finished product exceeds expectations.
            </p>
            <p className="text-lg text-gray-700">
              Whether you need a simple hem adjustment or a completely custom-made outfit, Ms. Hawkins approaches each project with the same level of dedication and precision that has become her hallmark over the decades.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-serif font-bold text-[#6B4226] mb-4">Our Little Shop</h2>
            <p className="text-lg text-gray-700 mb-4">
              Nestled in the heart of town, our cozy stitchery shop is a warm, inviting space filled with the gentle hum of sewing machines and the rich textures of quality fabrics. Visitors often comment on the comfortable atmosphere that makes them feel right at home.
            </p>
            <p className="text-lg text-gray-700">
              Ms. Hawkins welcomes each customer personally, taking the time to understand their needs and vision before beginning any work. This personal touch is what sets Hawkins Little Stitchery apart and keeps customers coming back year after year.
            </p>
          </div>
        </div>
        
        <div className="text-center">
          <Button 
            asChild
            className="bg-[#8B5A3C] hover:bg-[#6B4226] text-white rounded-md px-6 py-2"
          >
            <Link to="/contact">Contact Ms. Hawkins</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
