"use client";
import { useEffect, useRef, useState } from "react";

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <>
      {!isPlaying && (
        <button
          onClick={handleClick}
          className="fixed bottom-4 right-4 !px-4 !py-2 bg-gradient-to-r from-red-800 to-black text-white rounded shadow-lg z-50"
        >
          ▶ Turn on the music
        </button>
      )}
      <audio ref={audioRef} src="/music/background.mp3" loop />
    </>
  );
}
