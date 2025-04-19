
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Scissors, Needle, Thread } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#FEF7CD]/30">
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-8 lg:px-16 bg-[#FDE1D3]/50">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#6B4226] mb-6">Hawkins Little Stitchery</h1>
          <p className="text-xl md:text-2xl text-[#8B5A3C] mb-8 font-serif">Expert alterations and custom sewing with a personal touch</p>
          <Button 
            asChild
            size="lg" 
            className="bg-[#8B5A3C] hover:bg-[#6B4226] text-white rounded-md px-8 py-3 text-lg"
          >
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-center text-[#6B4226] mb-12">Our Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Scissors className="h-10 w-10 text-[#8B5A3C]" />}
              title="Alterations"
              description="Expert alterations for all garments. From hemming to resizing, we ensure your clothes fit perfectly."
            />
            <ServiceCard 
              icon={<Needle className="h-10 w-10 text-[#8B5A3C]" />}
              title="Custom Sewing"
              description="Bring your ideas to life with custom-made clothing and accessories tailored to your preferences."
            />
            <ServiceCard 
              icon={<Thread className="h-10 w-10 text-[#8B5A3C]" />}
              title="Repairs"
              description="Quality repairs for beloved garments. We mend tears, replace zippers, and fix seams with care."
            />
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#F2FCE2]/40">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt="Placeholder for Hawkins at her sewing machine" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-serif font-bold text-[#6B4226] mb-4">Meet Ms. Hawkins</h2>
            <p className="text-lg text-gray-700 mb-6">
              With over 50 years of experience, Ms. Hawkins brings traditional craftsmanship and meticulous attention to detail to every project. Her passion for sewing began as a young girl and has grown into a lifelong dedication to quality stitchery.
            </p>
            <Button 
              asChild
              variant="outline" 
              className="border-[#8B5A3C] text-[#8B5A3C] hover:bg-[#8B5A3C] hover:text-white"
            >
              <Link to="/about">Read More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#E5DEFF]/30">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold text-[#6B4226] mb-12">What Our Customers Say</h2>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-xl italic text-gray-700 mb-6">
              "Ms. Hawkins altered my wedding dress to perfection. Her attention to detail and craftsmanship made my special day even more beautiful. I cannot recommend her services enough!"
            </p>
            <p className="font-semibold text-[#8B5A3C]">— Sarah Johnson</p>
          </div>
        </div>
      </section>
    </div>
  );
};

// Service Card Component
const ServiceCard = ({ icon, title, description }) => (
  <Card className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
    <CardContent className="pt-6 text-center">
      <div className="mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-serif font-bold text-[#6B4226] mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </CardContent>
  </Card>
);

export default Index;
