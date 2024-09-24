"use client";

import { useEffect, useRef } from "react";

const BackgroundSound = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const playAudio = async () => {
    try {
      await audioRef.current?.play();
    } catch (error) {
      console.error("Error playing audio:", error);
    }
  };

  useEffect(() => {
    const handleInteraction = () => {
      playAudio();
      window.removeEventListener("click", handleInteraction); // Remove listener after first click
    };

    window.addEventListener("click", handleInteraction); // Play audio after user clicks anywhere

    return () => window.removeEventListener("click", handleInteraction);
  }, []);

  return (
    <audio ref={audioRef} loop>
      <source src="/sounds/back1.mp3" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
};

export default BackgroundSound;
