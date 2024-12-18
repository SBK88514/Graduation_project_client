// components/BackgroundLayout.js
import React from "react";

const BackgroundLayout = ({ backgroundImage, children }) => {
  const defaultBackgroundImage =
    "https://res.cloudinary.com/dp08vd3cy/image/upload/v1734259567/ctxvpiw3alojmz4stauy.webp"; // Your default image

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
      {/* Default gradient overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-amber-900/40 via-amber-500/30 to-transparent" /> */}

      {/* Content container */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default BackgroundLayout;
