import React from "react";
import { Mail, Phone, MapPin, Users } from "lucide-react";

function Offices() {
  const offices = [
    {
      location: "Tel Aviv, Israel",
      address: "123 Rothschild Blvd, Tel Aviv",
      phone: "+972-3-1234567",
      email: "tlv@company.com",
      description:
        "Our headquarters, specializing in technological development and advanced research",
    },
    {
      location: "Dubai, UAE",
      address: "Business Bay, Dubai UAE",
      phone: "+971-4-1234567",
      email: "dubai@company.com",
      description:
        "Our Middle East innovation center, focusing on green energy solutions",
    },
    {
      location: "London, UK",
      address: "123 Oxford Street, London",
      phone: "+44-20-1234567",
      email: "london@company.com",
      description:
        "Our European center for business development and strategic partnerships",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 p-8 min-h-screen">
      <h2 className="text-2xl font-bold text-amber-800 mb-8 text-center">
        Our Global Offices
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {offices.map((office, index) => (
          <div
            key={index}
            className="bg-white/80 rounded-xl p-6 shadow-lg backdrop-blur-sm hover:shadow-xl transition-shadow"
          >
            <h3 className="text-xl font-semibold text-amber-700 mb-4">
              {office.location}
            </h3>
            <div className="space-y-3">
              <div className="flex items-center text-amber-600">
                <MapPin className="w-4 h-4 mr-2" />
                <span className="text-sm">{office.address}</span>
              </div>
              <div className="flex items-center text-amber-600">
                <Phone className="w-4 h-4 mr-2" />
                <span className="text-sm">{office.phone}</span>
              </div>
              <div className="flex items-center text-amber-600">
                <Mail className="w-4 h-4 mr-2" />
                <span className="text-sm">{office.email}</span>
              </div>
            </div>
            <p className="mt-4 text-amber-900 text-sm">{office.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Offices;
