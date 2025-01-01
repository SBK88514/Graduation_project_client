import React from "react";
import {
  Target,
  History,
  Users,
  Award,
  Star,
  Grid,
  PhoneCall,
  ArrowRight,
} from "lucide-react";

function AboutPage() {
  const companyInfo = {
    name: "TechVision Solutions",
    slogan: "Transforming Tomorrow's Technology Today",
    founded: "2019",
    founders: ["Dr. Sarah Mitchell", "James Chen", "Dr. Michael Rodriguez"],
  };

  const sections = [
    {
      title: "Our Vision",
      icon: <Target className="w-8 h-8 mb-4 text-amber-600" />,
      content: `At ${companyInfo.name}, we envision a world where technology seamlessly enhances human potential. 
          Our mission is to deliver innovative solutions that transform businesses and improve lives. We're guided by 
          our core values of innovation, integrity, and excellence in everything we do.`,
    },
    {
      title: "Our Story",
      icon: <History className="w-8 h-8 mb-4 text-amber-600" />,
      content: `Founded in ${
        companyInfo.founded
      } by ${companyInfo.founders.join(", ")}, our journey began with 
          a shared vision to revolutionize the tech industry. Inspired by the rapid advancement of AI and sustainable 
          technology, we set out to create solutions that would make a lasting impact on society.`,
    },
    {
      title: "Our Expertise",
      icon: <Grid className="w-8 h-8 mb-4 text-amber-600" />,
      content:
        "We specialize in AI-driven solutions, sustainable tech infrastructure, and digital transformation. Our innovative approach combines cutting-edge technology with practical business applications.",
    },
    {
      title: "Achievements",
      icon: <Award className="w-8 h-8 mb-4 text-amber-600" />,
      content:
        "Recognized as a Top 10 Innovator in Green Tech (2023). Successfully deployed solutions for Fortune 500 companies. Awarded multiple patents for our groundbreaking AI algorithms.",
    },
  ];

  const competitiveAdvantages = [
    "AI-First Approach",
    "Sustainable Solutions",
    "Rapid Implementation",
    "24/7 Expert Support",
  ];

  return (
    <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 min-h-screen p-8">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-amber-700 via-amber-600 to-amber-800 text-transparent bg-clip-text mb-4">
          {companyInfo.name}
        </h1>
        <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full mb-4" />
        <p className="text-xl text-amber-700 font-light">
          {companyInfo.slogan}
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {sections.map((section, index) => (
          <div
            key={index}
            className="bg-white/80 p-8 rounded-xl shadow-lg backdrop-blur-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="flex flex-col items-center">
              {section.icon}
              <h2 className="text-2xl font-bold text-amber-700 mb-4">
                {section.title}
              </h2>
            </div>
            <p className="text-amber-900 text-center">{section.content}</p>
          </div>
        ))}
      </div>

      {/* Competitive Advantages Section */}
      <div className="bg-white/80 rounded-xl p-8 shadow-lg backdrop-blur-sm mb-16">
        <h2 className="text-2xl font-bold text-amber-700 text-center mb-8">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {competitiveAdvantages.map((advantage, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 bg-gradient-to-r from-amber-100 to-orange-100 p-4 rounded-lg"
            >
              <Star className="w-5 h-5 text-amber-600" />
              <span className="text-amber-800 font-medium">{advantage}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white/80 rounded-xl p-8 shadow-lg backdrop-blur-sm mb-16">
        <div className="text-center mb-8">
          <Users className="w-12 h-12 text-amber-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-amber-700">Our Team</h2>
          <p className="text-amber-900 mt-4">
            Our diverse team of experts brings together decades of experience in
            AI, software development, and sustainable technology. Each member is
            committed to delivering excellence and pushing the boundaries of
            what's possible.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-amber-700 mb-6">
          Ready to Transform Your Business?
        </h2>
        <button className="bg-amber-600 text-white px-8 py-4 rounded-xl hover:bg-amber-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center mx-auto">
          <PhoneCall className="w-5 h-5 mr-2" />
          Contact Us Today
          <ArrowRight className="w-5 h-5 ml-2" />
        </button>
      </div>
    </div>
  );
}

export default AboutPage;
