
import React from "react";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#FEF7CD]/30 py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#6B4226] mb-4 text-center">Contact Us</h1>
        <p className="text-xl text-center text-gray-700 mb-12 max-w-2xl mx-auto">
          Have a question or ready to start your project? Reach out to Ms. Hawkins directly.
        </p>
        
        <Card className="p-8 shadow-md border-none bg-[#FDE1D3]/40">
          <div className="space-y-6">
            <ContactInfo 
              icon={<MapPin />}
              title="Address"
              info={<>1114 Boanerges Church Rd.<br />Old Fort, TN 37362</>}
            />
            
            <ContactInfo 
              icon={<Phone />}
              title="Phone"
              info="(423) 241-2320"
            />
            
            <ContactInfo 
              icon={<Mail />}
              title="Email"
              info="lois.hawkins55@aol.com"
            />
            
            <ContactInfo 
              icon={<Clock />}
              title="Hours"
              info={<>
                Monday - Friday: 8am - 4pm<br />
                Saturday: Closed<br />
                Sunday: Closed
              </>}
            />
            
            <div className="mt-8 text-center">
              <p className="text-gray-700 italic">
                "For complex alterations or custom projects, I recommend calling ahead. Walk-ins are always welcome for simple alterations!"
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

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

export default Contact;
