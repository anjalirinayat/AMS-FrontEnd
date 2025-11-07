import { useState, useEffect } from "react";
import '../styles/ToggleText.css'

function ToggleText() {
  const [isFirstText, setIsFirstText] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFirstText(prev => !prev); // toggle text
    }, 2000); // change every 1000ms (1s)

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <div className="highlight" style={{ transition: "opacity 0.5s ease-in-out" }}>
      {isFirstText ? <h2>Joy of fresh Cuts,</h2> : <h2>at your doorstep</h2> }
    </div>
  );
}

export default ToggleText;
