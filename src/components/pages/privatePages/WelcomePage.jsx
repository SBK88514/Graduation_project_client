import React from "react";
import WelcomeAdmin from "./WelcomeAdmin";

function WelcomePage() {
  const backgroundImageUrl =
    "https://res.cloudinary.com/dp08vd3cy/image/upload/v1734259567/ctxvpiw3alojmz4stauy.web"; // החלף עם ה-URL שלך

  return (
    <div
      className="flex-1 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
      }}
    >
      {/* שכבת שקיפות מעל התמונה */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-amber-50/80 via-orange-50/80 to-amber-100/80" /> */}

      {/* תוכן הדף */}
      <div className="relative z-10 min-h-[calc(100vh-64px)] flex items-center justify-center p-4">
        <WelcomeAdmin />
      </div>
    </div>
  );
}

export default WelcomePage;
