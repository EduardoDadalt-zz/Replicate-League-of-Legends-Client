import React, { useEffect, useState } from "react";

const Att = () => {
  const [porcentage, setPorcentage] = useState(1);
  useEffect(() => {
    let id = setInterval(() => {
      if (porcentage < 100) setPorcentage(porcentage + 1);
      else setPorcentage(0);
    }, 100);

    return () => {
      clearInterval(id);
    };
  }, [porcentage]);

  return (
    <div
      style={{
        position: "absolute",
        width: "50%",
        right: "2rem",
        bottom: "2rem",
      }}
    >
      <span className="text-primary">Verificar...</span>
      <div style={{ height: 10, width: "100%" }}>
        <div style={{ backgroundColor: "var(--gray)" }}>
          <div
            style={{
              backgroundColor: "var(--cyan)",
              width: porcentage + "%",
              height: 10,
              transitionProperty: "width",
              transitionDuration: "0.2s",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Att;
