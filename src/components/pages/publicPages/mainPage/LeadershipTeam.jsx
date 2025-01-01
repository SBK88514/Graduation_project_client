import React from "react";
import { Mail, Phone, MapPin, Users } from "lucide-react";

function LeadershipTeam() {
  const teamMembers = [
    {
      name: "Dr. Chaim Pollak",
      role: "Chief Executive Officer",
      description:
        "Expert in business development and strategy with 15 years of experience in the global market",
      email: "sharon@company.com",
      phone: "+972-52-1234567",
      image: "/api/placeholder/150/150",
    },
    {
      name: "Dr. Daniel Biton",
      role: "Chief Technology Officer",
      description:
        "Leading innovative technological product development with AI specialization",
      email: "daniel@company.com",
      phone: "+972-52-2345678",
      image: "/api/placeholder/150/150",
    },
    {
      name: "Dr. Netanel Malka",
      role: "Business Development Director",
      description:
        "Specializing in strategic partnerships and growth in new markets",
      email: "michelle@company.com",
      phone: "+972-52-3456789",
      image: "/api/placeholder/150/150",
    },
    {
      name: "Dr. Simcha Klikshtein",
      role: "Head of Research",
      description: "Leading research and innovation in advanced technologies",
      email: "omar@company.com",
      phone: "+972-52-4567890",
      image: "/api/placeholder/150/150",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 p-8 min-h-screen">
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-amber-800 mb-8 text-center">
          Our Leadership Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white/80 rounded-xl p-6 shadow-lg backdrop-blur-sm hover:shadow-xl transition-shadow"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-amber-700 text-center mb-2">
                {member.name}
              </h3>
              <h4 className="text-amber-600 font-medium text-center mb-2">
                {member.role}
              </h4>
              <p className="text-amber-900 text-sm mb-4 text-center">
                {member.description}
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-amber-600">
                  <Mail className="w-4 h-4 mr-2" />
                  <span className="text-sm">{member.email}</span>
                </div>
                <div className="flex items-center text-amber-600">
                  <Phone className="w-4 h-4 mr-2" />
                  <span className="text-sm">{member.phone}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LeadershipTeam;
