import React from "react";
import WelcomeClient from "../privatePages/WelcomeClient";

function WelcomePage() {
  return (
    <div className="relative z-10 min-h-[calc(100vh-64px)] flex items-center justify-center p-4">
      <WelcomeClient />
    </div>
  );
}

export default WelcomePage;
