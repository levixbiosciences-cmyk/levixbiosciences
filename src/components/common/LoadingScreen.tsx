import React, { useState, useEffect, useRef } from 'react';

interface LoadingScreenProps {
  onComplete?: () => void;
  videoSrc?: string;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({
  onComplete,
  videoSrc = '/levix-front-loading.mp4',
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isExiting, setIsExiting] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const handleFinish = () => {
    if (isExiting || isFinished) return;
    setIsExiting(true);
    setTimeout(() => {
      setIsFinished(true);
      document.body.style.overflow = '';
      onComplete?.();
    }, 500); // smooth fade transition duration
  };

  useEffect(() => {
    // Prevent scrolling while video plays
    document.body.style.overflow = 'hidden';

    // Allow user to skip via keyboard (Escape or Enter)
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Enter') {
        handleFinish();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    // Try playing video unmuted immediately, fallback to muted if browser blocks
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.volume = 1.0;
      videoRef.current.play().catch(() => {
        if (videoRef.current) {
          videoRef.current.muted = true;
          videoRef.current.play().catch(() => {});
        }
      });
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, []);

  if (isFinished) return null;

  return (
    <div
      id="levix-video-loading"
      role="region"
      aria-label="LEVIX Bio Science Introduction"
      className={`fixed inset-0 z-[99999] flex items-center justify-center bg-black transition-opacity duration-500 ease-out select-none overflow-hidden ${
        isExiting ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Video Element - Crisp, clean, borderless presentation */}
      <div className="relative w-full h-full flex items-center justify-center p-4 sm:p-8">
        <video
          ref={videoRef}
          src={videoSrc}
          autoPlay
          playsInline
          onEnded={handleFinish}
          onError={handleFinish}
          style={{
            maxWidth: '960px',
            maxHeight: '80vh',
            filter: 'contrast(1.08) brightness(1.03) saturate(1.06)',
            transform: 'translateZ(0)',
            WebkitBackfaceVisibility: 'hidden',
          }}
          className="w-auto h-auto object-contain rounded-2xl shadow-[0_0_70px_rgba(113,55,165,0.35)]"
        />
      </div>

      {/* Subtle Bottom Brand Line */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none opacity-50">
        <span className="text-[10px] text-white/50 font-mono tracking-wider">
          LEVIX BIO SCIENCE
        </span>
      </div>
    </div>
  );
};



