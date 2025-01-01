import React from "react";

function WaveLoader() {
  return (
    <div className="flex gap-1 items-center justify-center h-24">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="w-3 h-16 bg-gradient-to-t from-amber-600 to-amber-400 rounded-full animate-bounce"
          style={{
            animationDelay: `${i * 100}ms`,
            animationDuration: "1s",
          }}
        />
      ))}
    </div>
  );
}

export default WaveLoader;
