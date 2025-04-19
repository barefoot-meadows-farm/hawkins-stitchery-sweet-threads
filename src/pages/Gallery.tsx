
import React from "react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const Gallery = () => {
  const featuredProjects = [
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
    },
    {
      id: 4,
      title: "Custom Curtains",
      description: "Bespoke window treatments designed to complement the home's aesthetic while providing perfect light control.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const categories = [
    {
      name: "Alterations",
      projects: [
        {
          id: 1,
          title: "Wedding Dress Hem",
          image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        },
        {
          id: 2,
          title: "Suit Tailoring",
          image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        },
        {
          id: 3,
          title: "Dress Resizing",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        }
      ]
    },
    {
      name: "Custom Creations",
      projects: [
        {
          id: 1,
          title: "Summer Dress",
          image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        },
        {
          id: 2,
          title: "Quilt",
          image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        },
        {
          id: 3,
          title: "Handmade Pillows",
          image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        }
      ]
    },
    {
      name: "Repairs",
      projects: [
        {
          id: 1,
          title: "Heirloom Restoration",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        },
        {
          id: 2,
          title: "Zipper Replacement",
          image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        },
        {
          id: 3,
          title: "Patch Work",
          image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#FEF7CD]/30 py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#6B4226] mb-4 text-center">Our Gallery</h1>
        <p className="text-xl text-center text-gray-700 mb-12 max-w-3xl mx-auto">
          Browse through some of Ms. Hawkins' finest work over the years. Each piece tells a story of craftsmanship and care.
        </p>
        
        {/* Featured Projects Carousel */}
        <div className="mb-16">
          <h2 className="text-2xl font-serif font-bold text-[#6B4226] mb-6">Featured Projects</h2>
          
          <Carousel className="w-full">
            <CarouselContent>
              {featuredProjects.map((project) => (
                <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="border-none shadow-md overflow-hidden">
                      <CardContent className="p-0">
                        <div className="relative">
                          <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-64 object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                            <h3 className="text-xl font-serif font-bold text-white mb-2">{project.title}</h3>
                            <p className="text-white/90 text-sm">{project.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>
        
        {/* Project Categories */}
        <div className="space-y-16">
          {categories.map((category) => (
            <div key={category.name}>
              <h2 className="text-2xl font-serif font-bold text-[#6B4226] mb-6">{category.name}</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.projects.map((project) => (
                  <Card key={project.id} className="border-none shadow-md overflow-hidden">
                    <CardContent className="p-0">
                      <div className="relative group">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <h3 className="text-xl font-serif font-bold text-white px-4 py-2 bg-[#6B4226]/80 rounded-md">
                            {project.title}
                          </h3>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-[#FDE1D3]/50 rounded-lg p-8 shadow-md mt-16">
          <h2 className="text-2xl font-serif font-bold text-[#6B4226] mb-4 text-center">Have a Project in Mind?</h2>
          <p className="text-center text-gray-700 mb-6">
            Reach out to Ms. Hawkins to discuss your vision and how she can bring it to life with her expert stitchery.
          </p>
          <div className="flex justify-center">
            <a 
              href="/contact" 
              className="inline-block px-6 py-3 bg-[#8B5A3C] hover:bg-[#6B4226] text-white rounded-md font-medium transition-colors duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
