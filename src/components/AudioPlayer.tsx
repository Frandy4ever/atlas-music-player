import { useEffect, useRef, useState } from "react";

interface AudioPlayerProps {
  src: string;
  isPlaying: boolean;
  volume: number;
  playbackSpeed: number;
  onPlayToggle: () => void;
  onNext: () => void;
  onProgressUpdate: (progress: number, duration: number) => void;
  onSeek: (time: number) => void;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({
  src,
  isPlaying,
  volume,
  playbackSpeed,
  onPlayToggle,
  onNext,
  onProgressUpdate,
  onSeek,
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // Ensure audio source updates when new song is selected
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = src;
      audioRef.current.load();
      if (isPlaying) {
        audioRef.current.play();
      }
    }
  }, [src]);

  // Control Play/Pause
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  // Ensure Volume is updated
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  // Ensure Playback Speed is properly applied
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.playbackRate = playbackSpeed;
    }
  }, [playbackSpeed]);

  // Update progress bar while song plays
  useEffect(() => {
    const updateProgress = () => {
      if (audioRef.current) {
        setCurrentTime(audioRef.current.currentTime);
        setDuration(audioRef.current.duration || 0);
        onProgressUpdate(audioRef.current.currentTime, audioRef.current.duration);
      }
    };

    if (audioRef.current) {
      audioRef.current.addEventListener("timeupdate", updateProgress);
      audioRef.current.addEventListener("loadedmetadata", updateProgress);
      audioRef.current.addEventListener("ended", onNext);
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("timeupdate", updateProgress);
        audioRef.current.removeEventListener("loadedmetadata", updateProgress);
        audioRef.current.removeEventListener("ended", onNext);
      }
    };
  }, [onNext, onProgressUpdate]);

  // Allow users to manually seek through progress bar
  const handleSeek = (time: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
      onSeek(time);
      if (!isPlaying) {
        audioRef.current.play(); // Ensure playback resumes from clicked position
      }
    }
  };

  return <audio ref={audioRef} />;
};

export default AudioPlayer;
