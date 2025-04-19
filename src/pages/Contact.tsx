
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for your message. Ms. Hawkins will respond soon!",
    });
  };

  return (
    <div className="min-h-screen bg-[#FEF7CD]/30 py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#6B4226] mb-4 text-center">Contact Us</h1>
        <p className="text-xl text-center text-gray-700 mb-12 max-w-3xl mx-auto">
          Have a question or ready to start your project? Reach out to Ms. Hawkins directly.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-serif font-bold text-[#6B4226] mb-6">Send a Message</h2>
            <Card className="p-6 shadow-md border-none">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input id="name" placeholder="Jane Smith" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="jane@example.com" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="(555) 123-4567" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Your Message</Label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B5A3C]"
                    placeholder="Please describe your project or inquiry..."
                    required
                  ></textarea>
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-[#8B5A3C] hover:bg-[#6B4226] text-white"
                >
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
          
          <div>
            <h2 className="text-2xl font-serif font-bold text-[#6B4226] mb-6">Visit Our Shop</h2>
            <Card className="p-6 shadow-md border-none bg-[#FDE1D3]/40 h-full">
              <div className="space-y-6">
                <ContactInfo 
                  icon={<MapPin />}
                  title="Address"
                  info={<>123 Stitchery Lane<br />Hawkins Town, HT 12345</>}
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
                  info={<>
                    Monday - Friday: 9am - 5pm<br />
                    Saturday: 10am - 2pm<br />
                    Sunday: Closed
                  </>}
                />
                
                <div className="mt-6">
                  <h3 className="text-xl font-serif font-semibold text-[#6B4226] mb-2">Notes from Ms. Hawkins</h3>
                  <p className="text-gray-700 italic">
                    "For complex alterations or custom projects, I recommend scheduling an appointment. Walk-ins are always welcome for simple alterations and consultations!"
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-serif font-bold text-[#6B4226] mb-4 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-4 mt-6">
            <FAQ 
              question="How long do alterations usually take?"
              answer="Simple alterations like hemming can often be completed within 2-3 business days. More complex projects may take 1-2 weeks. Rush services are available upon request for an additional fee."
            />
            
            <FAQ 
              question="Do I need to make an appointment?"
              answer="Appointments are recommended for custom projects and complex alterations to ensure you receive dedicated attention. For simple alterations, walk-ins are welcome during regular business hours."
            />
            
            <FAQ 
              question="What should I bring for my first consultation?"
              answer="For alterations, please bring the garment you'd like altered. For custom projects, reference images or sketches are helpful, and if you have fabric preferences, feel free to bring samples or ideas."
            />
            
            <FAQ 
              question="Do you offer gift certificates?"
              answer="Yes! Gift certificates are available in any denomination and make wonderful presents for your loved ones who might need alterations or custom sewing services."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Contact Info Component
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

// FAQ Component
const FAQ = ({ question, answer }) => (
  <div className="border-b border-gray-200 pb-4">
    <h3 className="text-lg font-serif font-semibold text-[#6B4226] mb-2">{question}</h3>
    <p className="text-gray-700">{answer}</p>
  </div>
);

export default Contact;
