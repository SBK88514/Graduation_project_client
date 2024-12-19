import React from "react";

const BackgroundLayout = ({ backgroundImage, children }) => {
  const defaultBackgroundImage =
    "https://res.cloudinary.com/dmdapgseu/image/upload/v1734548151/DALL_E_2024-12-18_20.55.38_-_A_beautiful_modern_and_abstract_construction_site_background_with_bright_and_elegant_shades_of_warm_amber_gradients_FFF7E6_to_FFEBCD_and_soft_or_om9yco.webp"; // Your default image

  return (
    <div
      className="min-h-screen relative"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${
          backgroundImage || defaultBackgroundImage
        })`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default BackgroundLayout;
