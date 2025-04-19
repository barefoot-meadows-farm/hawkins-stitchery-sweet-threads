
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Scissors, Needle, Thread, Ruler, StitchIcon, SewingMachine } from "@/components/ui/StitcheryIcons";

const Services = () => {
  return (
    <div className="min-h-screen bg-[#FEF7CD]/30 py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#6B4226] mb-4 text-center">Our Services</h1>
        <p className="text-xl text-center text-gray-700 mb-12 max-w-3xl mx-auto">
          From simple alterations to custom creations, Ms. Hawkins brings decades of experience to every project.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <ServiceCard 
            icon={<Scissors />}
            title="Alterations"
            description="Expert alterations for all types of garments to ensure the perfect fit."
            details={[
              "Hemming pants, skirts, and dresses",
              "Taking in or letting out seams",
              "Sleeve adjustments",
              "Waistband adjustments",
              "Zipper replacements"
            ]}
          />
          
          <ServiceCard 
            icon={<Needle />}
            title="Custom Sewing"
            description="Bring your vision to life with custom-made clothing and accessories."
            details={[
              "Custom dresses and formal wear",
              "Personalized accessories",
              "Home decor items",
              "Special occasion outfits",
              "Custom alterations to existing patterns"
            ]}
          />
          
          <ServiceCard 
            icon={<Thread />}
            title="Repairs"
            description="Extend the life of your beloved garments with professional repairs."
            details={[
              "Tear mending",
              "Patch application",
              "Button replacement",
              "Seam repair",
              "Reinforcement of weakened areas"
            ]}
          />
          
          <ServiceCard 
            icon={<Ruler />}
            title="Fittings & Consultations"
            description="Professional fitting services and expert advice for your sewing projects."
            details={[
              "Professional measurements",
              "Fitting sessions for custom garments",
              "Pre-purchase consultation",
              "Fabric selection advice",
              "Pattern modification consultation"
            ]}
          />
        </div>
        
        <div className="bg-[#FDE1D3]/50 rounded-lg p-8 shadow-md">
          <h2 className="text-3xl font-serif font-bold text-[#6B4226] mb-4 text-center">The Stitchery Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-2xl font-bold text-[#8B5A3C]">1</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-[#6B4226] mb-2">Consultation</h3>
              <p className="text-gray-700">
                Discuss your needs and vision with Ms. Hawkins to determine the best approach for your project.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-2xl font-bold text-[#8B5A3C]">2</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-[#6B4226] mb-2">Fitting & Planning</h3>
              <p className="text-gray-700">
                Measurements are taken and a detailed plan is created to achieve your desired results.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-2xl font-bold text-[#8B5A3C]">3</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-[#6B4226] mb-2">Crafting & Delivery</h3>
              <p className="text-gray-700">
                Ms. Hawkins works her magic with meticulous attention to detail, and your finished pieces are ready for pickup.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Service Card Component
const ServiceCard = ({ icon, title, description, details }) => (
  <Card className="border-none shadow-md h-full">
    <CardContent className="pt-6">
      <div className="flex items-center mb-4">
        <div className="text-[#8B5A3C] mr-3">
          {React.cloneElement(icon, { className: "h-8 w-8" })}
        </div>
        <h3 className="text-2xl font-serif font-bold text-[#6B4226]">{title}</h3>
      </div>
      <p className="text-gray-700 mb-4">{description}</p>
      <ul className="list-disc pl-5 text-gray-700 space-y-1">
        {details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

export default Services;
