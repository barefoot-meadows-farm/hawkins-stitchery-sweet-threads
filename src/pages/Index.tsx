
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Scissors, MapPin, Phone, Mail, Clock } from "lucide-react";
import { Thread } from "@/components/ui/StitcheryIcons";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Index = () => {
  const galleryItems = [
    {
      id: 1,
      title: "Wedding Dress Alterations",
      description: "Custom alterations for a vintage wedding gown, preserving its classic charm while ensuring a perfect fit.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Custom Quilt",
      description: "A handmade quilt created from family heirloom fabrics, carefully stitched to preserve memories across generations.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Business Suit Tailoring",
      description: "Precision tailoring for a professional wardrobe, creating the perfect fit for confidence in the workplace.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FEF7CD]/30">
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-8 lg:px-16 bg-[#FDE1D3]/50">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#6B4226] mb-6">
            Hawkins Little Stitchery
          </h1>
          <p className="text-xl md:text-2xl text-[#8B5A3C] mb-8 font-serif">
            Expert alterations and custom sewing with a personal touch
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-center text-[#6B4226] mb-12">
            Our Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceCard
              icon={<Scissors className="h-10 w-10 text-[#8B5A3C]" />}
              title="Alterations"
              description="Expert alterations for all garments. From hemming to resizing, we ensure your clothes fit perfectly."
            />
            <ServiceCard
              icon={<Thread className="h-10 w-10 text-[#8B5A3C]" />}
              title="Repairs"
              description="Quality repairs for beloved garments. We mend tears, replace zippers, and fix seams with care."
            />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#F2FCE2]/40">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-center text-[#6B4226] mb-12">
            Gallery
          </h2>
          
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {galleryItems.map((item) => (
                <CarouselItem key={item.id}>
                  <Card className="border-none shadow-md overflow-hidden">
                    <CardContent className="p-0">
                      <div className="relative">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-[400px] object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                          <h3 className="text-xl font-serif font-bold text-white mb-2">
                            {item.title}
                          </h3>
                          <p className="text-white/90 text-sm">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#FDE1D3]/40">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-[#6B4226] mb-8 text-center">
            Contact Us
          </h2>

          <Card className="p-8 shadow-md border-none bg-white/80">
            <div className="space-y-6">
              <ContactInfo
                icon={<MapPin />}
                title="Address"
                info={
                  <>
                    123 Stitchery Lane
                    <br />
                    Hawkins Town, HT 12345
                  </>
                }
              />

              <ContactInfo
                icon={<Phone />}
                title="Phone"
                info="(555) 123-4567"
              />

              <ContactInfo
                icon={<Mail />}
                title="Email"
                info="mshawkins@littlestitchery.com"
              />

              <ContactInfo
                icon={<Clock />}
                title="Hours"
                info={
                  <>
                    Monday - Friday: 9am - 5pm
                    <br />
                    Saturday: 10am - 2pm
                    <br />
                    Sunday: Closed
                  </>
                }
              />
            </div>
          </Card>
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

const ContactInfo = ({ icon, title, info }) => (
  <div className="flex items-start">
    <div className="text-[#8B5A3C] mr-3 mt-1">
      {React.cloneElement(icon, { className: "h-5 w-5" })}
    </div>
    <div>
      <h3 className="font-serif font-semibold text-[#6B4226]">{title}</h3>
      <p className="text-gray-700">{info}</p>
    </div>
  </div>
);

export default Index;
