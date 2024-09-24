/* eslint-disable @typescript-eslint/no-unused-expressions */
"use client";

import { Volume2, VolumeOff } from "lucide-react";
import { useEffect, useRef, useState, useCallback } from "react";

const FloatButton = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isActive, setIsActive] = useState(false);

  const playAudio = useCallback(async () => {
    try {
      await audioRef.current?.play();
      setIsActive(true);
    } catch (error) {
      console.error("Error playing audio:", error);
      setIsActive(false);
    }
  }, []);

  const stopAudio = useCallback(async () => {
    try {
      audioRef.current?.pause();
      setIsActive(false);
    } catch (error) {
      console.error("Error stopping audio:", error);
    }
  }, []);

  const handleClick = () => {
    isActive ? stopAudio() : playAudio();
  };

  useEffect(() => {
    const handleInteraction = () => {
      playAudio();
      window.removeEventListener("click", handleInteraction); // Remove listener after first click
    };

    window.addEventListener("click", handleInteraction); // Play audio on first user interaction

    return () => window.removeEventListener("click", handleInteraction); // Cleanup
  }, [playAudio]);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <button
        onClick={handleClick}
        className="text-white shadow-xl p-3 rounded-full bg-gradient-to-r from-red-600 to-red-900 hover:scale-105 transition-all      duration-300"
      >
        {isActive ? (
          <Volume2 className="w-6 h-6" />
        ) : (
          <VolumeOff className="w-6 h-6" />
        )}
      </button>
      <audio ref={audioRef} loop hidden>
        <source src="/sounds/back1.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default FloatButton;
