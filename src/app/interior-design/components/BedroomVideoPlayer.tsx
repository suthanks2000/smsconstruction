"use client";

import { useState, useRef } from "react";
import { Play } from "lucide-react";

interface BedroomVideoPlayerProps {
  src: string;
  poster: string;
  title: string;
}

export default function BedroomVideoPlayer({
  src,
  poster,
  title,
}: BedroomVideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleTogglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };
  

  return (
    <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-[22px] overflow-hidden bg-[#171614] border border-[#E7E0D4] shadow-sm group">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        muted
        playsInline
        controls={isPlaying}
        preload="none"
        onEnded={() => setIsPlaying(false)}
        className="w-full h-full object-cover"
        aria-label={title}
      />

      {/* Overlay controls when not playing */}
      {!isPlaying && (
        <div
          onClick={handleTogglePlay}
          className="absolute inset-0 bg-black/30 hover:bg-black/20 backdrop-blur-[1px] transition-colors flex flex-col items-center justify-center cursor-pointer p-4 text-center select-none"
        >
          <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-[#FAF8F3] text-[#171614] shadow-lg group-hover:scale-110 transition-transform duration-300 mb-3">
            <Play size={22} className="ml-1 text-[#B08A52]" />
          </div>
          <span className="font-sans text-[12px] uppercase tracking-widest text-white font-semibold drop-shadow-md">
            Watch Room Walkthrough
          </span>
          <span className="text-[11px] text-white/80 font-sans mt-0.5">
            Click to play (muted)
          </span>
        </div>
      )}
    </div>
  );
}
