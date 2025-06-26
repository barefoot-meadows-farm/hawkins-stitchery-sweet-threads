
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
import Autoplay from "embla-carousel-autoplay";

const Index = () => {
  const galleryItems = [
    {
      id: 1,
      title: "Prom Dress Alterations",
      description: "Beautiful hot pink prom dress with perfect fit and elegant bow detail, showcasing our expertise in formal wear alterations.",
      image: "/lovable-uploads/b92a401b-ccb6-4e56-bc23-3b4ccd16dd7d.png"
    },
    {
      id: 2,
      title: "Wedding Dress Fitting",
      description: "Stunning lace wedding gown with intricate beadwork and perfect train positioning, demonstrating our bridal alteration skills.",
      image: "/lovable-uploads/6c3bd8bb-61da-401d-a49b-e1f4665e0a92.png"
    },
    {
      id: 3,
      title: "Bridesmaid Dress",
      description: "Elegant royal blue bridesmaid dress with strapless design, tailored for a flawless silhouette and comfortable fit.",
      image: "/lovable-uploads/a7c3c136-e0e6-4a43-bc92-96880ec114f5.png"
    },
    {
      id: 4,
      title: "Formal Evening Wear",
      description: "Striking red evening gown with tiered ruffles and perfect hemline, showcasing our attention to detail in formal alterations.",
      image: "/lovable-uploads/2ce5c14e-623d-4256-bcea-a3efad7a04a6.png"
    },
    {
      id: 5,
      title: "Bridal Gown Perfection",
      description: "Exquisite lace wedding dress with detailed beadwork and cathedral train, representing our finest bridal alteration work.",
      image: "/lovable-uploads/19e49bb6-8841-41e2-b9d1-91e742bf096f.png"
    },
    {
      id: 6,
      title: "Prom Memories",
      description: "Glamorous sequined green prom dress capturing special moments, demonstrating our commitment to making every occasion perfect.",
      image: "/lovable-uploads/f678d60a-772e-4db5-9e21-091ba17f938f.png"
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
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-center text-[#6B4226] mb-12">
            Gallery
          </h2>
          
          <Carousel 
            className="w-full mx-auto"
            plugins={[
              Autoplay({
                delay: 8000,
              }),
            ]}
            opts={{
              align: "center",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {galleryItems.map((item) => (
                <CarouselItem key={item.id} className="pl-2 md:pl-4 basis-full md:basis-4/5 lg:basis-3/4">
                  <Card className="border-none shadow-md overflow-hidden">
                    <CardContent className="p-0">
                      <div className="relative">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-[500px] md:h-[600px] object-contain bg-gray-50"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-6">
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
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#FDE1D3]/40">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-[#6B4226] mb-8 text-center">
            Contact Us
          </h2>

          <Card className="p-8 shadow-md border-none bg-white/80">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div className="space-y-6">
                <ContactInfo
                  icon={<MapPin />}
                  title="Address"
                  info={
                    <>
                      1114 Boanerges Church Rd.
                      <br />
                      Old Fort, TN 37362
                    </>
                  }
                />

                <ContactInfo
                  icon={<Phone />}
                  title="Phone"
                  info="(423) 241-2320"
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

              <div className="flex justify-center">
                <img
                  src="/lovable-uploads/28855fb1-ddf1-436f-9353-ad203647ab87.png"
                  alt="Hawkins Little Stitchery Business Sign"
                  className="w-full max-w-xs h-auto rounded-lg shadow-md"
                />
              </div>
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
