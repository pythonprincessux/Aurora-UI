"use client";

import React, { useEffect } from "react";

const EmberTrail: React.FC = () => {
  useEffect(() => {
    const trailContainer = document.createElement("div");
    trailContainer.style.position = "fixed";
    trailContainer.style.top = "0";
    trailContainer.style.left = "0";
    trailContainer.style.width = "100%";
    trailContainer.style.height = "100%";
    trailContainer.style.pointerEvents = "none";
    trailContainer.style.overflow = "hidden";
    document.body.appendChild(trailContainer);

    const createEmber = (x: number, y: number) => {
      const ember = document.createElement("div");
      ember.className = "ember-particle";
      ember.style.left = `${x}px`;
      ember.style.top = `${y}px`;
      trailContainer.appendChild(ember);

      setTimeout(() => ember.remove(), 1200);
    };

    const handleMove = (e: MouseEvent) => {
      createEmber(e.clientX, e.clientY);
    };

    window.addEventListener("mousemove", handleMove);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.body.removeChild(trailContainer);
    };
  }, []);

  return null;
};

export default EmberTrail;