
import { useState, lazy, Suspense } from "react";

const HeavyComponent = lazy(() => import("./HeavyComponent"));

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>⚡ React.memo & Lazy Loading</h1>
      <p>Performance Optimization Demo</p>

      <button className="counter-btn" onClick={() => setCount(count + 1)}>
        Increment Counter ({count})
      </button>

      <Suspense fallback={<div className="loader">Loading Heavy Component...</div>}>
        <HeavyComponent />
      </Suspense>
    </div>
  );
}

export default App;
