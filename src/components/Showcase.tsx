import { useEffect, useRef, useState } from "react";

const Showcase = () => {
  const playerRef = useRef<HTMLIFrameElement | null>(null);
  const ytPlayerRef = useRef<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [origin, setOrigin] = useState("");


  useEffect(() => {
    if (typeof window !== "undefined") {
      setOrigin(window.location.origin);
    }
  }, []);

  useEffect(() => {
    const ensureYouTubeApi = () => {
      if ((window as any).YT && (window as any).YT.Player) {
        return Promise.resolve();
      }
      return new Promise<void>((resolve) => {
        const existing = document.getElementById("youtube-iframe-api");
        if (existing) {
          (window as any).onYouTubeIframeAPIReady = () => resolve();
          return;
        }
        const script = document.createElement("script");
        script.id = "youtube-iframe-api";
        script.src = "https://www.youtube.com/iframe_api";
        (window as any).onYouTubeIframeAPIReady = () => resolve();
        document.body.appendChild(script);
      });
    };

    let isMounted = true;

    ensureYouTubeApi().then(() => {
      if (!isMounted || !playerRef.current) return;
      ytPlayerRef.current = new (window as any).YT.Player(
        playerRef.current,
        {
          events: {
            onStateChange: (event: any) => {
              const YT = (window as any).YT;
              if (!YT) return;
              if (event.data === YT.PlayerState.PLAYING) {
                setIsPlaying(true);
              } else if (
                event.data === YT.PlayerState.PAUSED ||
                event.data === YT.PlayerState.ENDED ||
                event.data === YT.PlayerState.CUED
              ) {
                setIsPlaying(false);
              }
            },
          },
        }
      );
    });

    return () => {
      isMounted = false;
      if (ytPlayerRef.current?.destroy) {
        ytPlayerRef.current.destroy();
      }
    };
  }, []);
  return (
    <section id="showcase" className="py-24 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-nasalization text-center mb-8 text-glow-purple">
          Showcase
        </h2>
        <p className="text-center text-foreground/85 max-w-2xl mx-auto mb-12 text-lg md:text-xl font-nasalization italic">
          Listen to the full No Gravity Berlin podcast playlist directly here.
        </p>

        <div
          className="w-full md:w-[70%] mx-auto aspect-video rounded-2xl overflow-hidden relative"
          style={{
            boxShadow: '0px 0px 15px 4px #a259ff18',     
            transition: 'box-shadow 0.7s',
          }}
        >
          <iframe
            ref={playerRef}
            className={`w-full h-full transition-all duration-700 relative z-10 ${
              isPlaying ? "filter-none" : "filter brightness-50 saturate-50"
            }`}
            src={`https://www.youtube.com/embed?listType=playlist&list=PLTl7JxentpQJjnDcSaxm1nfeT5ORLoMUS&enablejsapi=1${
              origin ? `&origin=${encodeURIComponent(origin)}` : ""
            }`}
            title="No Gravity Berlin Podcast Playlist"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
};

export default Showcase;
