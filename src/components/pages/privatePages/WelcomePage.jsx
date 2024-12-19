import React from "react";
import WelcomeAdmin from "./WelcomeAdmin";

function WelcomePage() {
  const backgroundImageUrl =
    "https://res.cloudinary.com/dmdapgseu/image/upload/v1734548151/DALL_E_2024-12-18_20.55.38_-_A_beautiful_modern_and_abstract_construction_site_background_with_bright_and_elegant_shades_of_warm_amber_gradients_FFF7E6_to_FFEBCD_and_soft_or_om9yco.webp";

  return (
    <div
      className="flex-1 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
      }}
    >
      <div className="relative z-10 min-h-[calc(100vh-64px)] flex items-center justify-center p-4">
        <WelcomeAdmin />
      </div>
    </div>
  );
}

export default WelcomePage;
