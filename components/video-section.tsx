"use client";

import * as React from "react";

const CDN = "https://byqsupply-components.netlify.app/evermind";

function useInView<T extends HTMLElement>(threshold = 0.15) {
  const ref = React.useRef<T>(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, visible] as const;
}

function PlayIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path d="M6 4L20 12L6 20V4Z" fill="currentColor" />
    </svg>
  );
}

export function VideoSection() {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = React.useState(false);
  const [headerRef, headerVisible] = useInView<HTMLDivElement>(0.15);
  const [frameRef, frameVisible] = useInView<HTMLDivElement>(0.1);

  const handlePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    video.play();
    setPlaying(true);
  };

  return (
    <section className="bg-accent py-24 max-[767px]:py-16">
      <div className="mx-auto max-w-[940px] px-5">
        <div
          ref={headerRef}
          className={`mx-auto mb-12 flex max-w-[620px] flex-col items-center text-center transition-all duration-700 ease-out max-[767px]:mb-8 ${
            headerVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="mb-6 flex items-center gap-2">
            <div className="h-2 w-2 shrink-0 rounded-full bg-brand" />
            <span className="text-xs font-medium tracking-[0.15em] text-white uppercase">
              Watch
            </span>
          </div>
          <h2 className="font-display text-[clamp(32px,4vw,52px)] leading-[1.1] font-normal text-surface">
            See how hope takes shape
          </h2>
          <p className="mt-5 max-w-[480px] text-base leading-relaxed text-surface/70">
            A short look at the people and work behind everything we do — quiet,
            steady progress in motion.
          </p>
        </div>

        <div
          ref={frameRef}
          className={`relative overflow-hidden rounded-2xl transition-all duration-700 ease-out ${
            frameVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <video
            ref={videoRef}
            controls={playing}
            playsInline
            loop
            className="aspect-video w-full object-cover"
            poster={`${CDN}/images/ServiceImage.webp`}
          >
            <source
              src={`${CDN}/videos/outputcompress-video-onlinecom-1-transcode.mp4`}
              type="video/mp4"
            />
            <source
              src={`${CDN}/videos/outputcompress-video-onlinecom-1-transcode.webm`}
              type="video/webm"
            />
          </video>

          {!playing ? (
            <button
              type="button"
              onClick={handlePlay}
              aria-label="Play video"
              className="group absolute inset-0 flex items-center justify-center bg-black/30 transition-colors duration-300 hover:bg-black/40"
            >
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-brand pl-1 text-accent transition-transform duration-300 group-hover:scale-105">
                <PlayIcon />
              </span>
            </button>
          ) : null}
        </div>
      </div>
    </section>
  );
}
