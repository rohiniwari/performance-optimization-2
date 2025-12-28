
import React from "react";

function HeavyComponent() {
  console.log("HeavyComponent rendered");

  return (
    <div className="heavy-card">
      <h2>Heavy UI Section</h2>
      <p>
        This component simulates a heavy UI. It is lazy loaded and wrapped with
        React.memo to prevent unnecessary re-renders.
      </p>
    </div>
  );
}

export default React.memo(HeavyComponent);
