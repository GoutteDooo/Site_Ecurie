import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ComponentLazyBackground = ({ imageUrl, isFilter }) => {
  const containerRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    console.log("ca marche");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isLoaded) {
            const img = new Image();
            img.src = imageUrl;
            img.onload = () => {
              setIsLoaded(true);
              observer.disconnect();
            };
          }
        });
      },
      { rootMargin: "200px 0px" }
    ); // Déclenche 200px avant l'entrée dans le viewport

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [imageUrl, isLoaded]);

  return (
    <div
      className={`carousel--item ${isFilter ? "filter" : ""}`}
      ref={containerRef}
      style={{
        backgroundImage: isLoaded ? `url(${imageUrl})` : "none",
        transition: "background-image 0.3s ease",
      }}
    >
      {isFilter && (
        <Link to="/installations">
          <button>DÉCOUVRIR TOUTES NOS INSTALLATIONS</button>
        </Link>
      )}
    </div>
  );
};

export default ComponentLazyBackground;
