import { useEffect, useRef, useState } from "react";
import { FaPlay, FaPause, FaStop } from "react-icons/fa";
import { PlayerWrapper, Controls, ControlButton } from "./styled.tsx";

interface VideoPlayerProps {
  src: string;
}

export default function VideoPlayer({ src }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  function playToggle() {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  }

  function stop() {
    const video = videoRef.current;
    if (!video) return;

    video.pause();
    video.currentTime = 0;
    setIsPlaying(false);
  }

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          video.pause();
          setIsPlaying(false);
        }
      },
      {
        threshold: 0.5,
      },
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  return (
    <PlayerWrapper ref={containerRef}>
      <video ref={videoRef} src={src} muted />

      <Controls>
        <ControlButton onClick={playToggle}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </ControlButton>

        <ControlButton onClick={stop}>
          <FaStop />
        </ControlButton>
      </Controls>
    </PlayerWrapper>
  );
}
