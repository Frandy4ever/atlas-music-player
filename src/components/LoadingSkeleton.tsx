// LoadingSkeleton.tsx
import React from "react";

const LoadingSkeleton: React.FC = () => {
  return (
    <div
      className="w-full max-w-screen-lg mx-auto p-3"
      style={{ minHeight: "calc(100vh - 6rem)" }}
      aria-hidden
    >
      <div className="flex flex-col md:flex-row items-stretch w-full h-full gap-4">
        {/* LEFT: CurrentlyPlaying skeleton */}
        <div className="w-full md:w-1/2 flex flex-col items-center p-4 md:p-6 min-h-0">
          {/* cover */}
          <div
            className="w-full max-w-[520px] aspect-square rounded-xl overflow-hidden 
                       bg-skeleton dark:bg-skeleton-dark
                       shadow-md shadow-hover-light dark:shadow-hover-dark"
          />

          {/* title + artist */}
          <div className="text-center mt-3 mx-auto w-full max-w-[520px]">
            <div className="mx-auto h-6 w-1/3 rounded-md 
                            bg-skeleton dark:bg-skeleton-dark
                            shadow-sm shadow-hover-light dark:shadow-hover-dark" />
            <div className="mx-auto h-4 w-1/4 mt-2 rounded-md 
                            bg-skeleton dark:bg--skeleton-dark
                            shadow-sm shadow-hover-light dark:shadow-hover-dark" />
          </div>

          {/* progress */}
          <div className="w-full max-w-[640px] mx-auto px-2 mt-4">
            <div className="flex justify-between text-xs text-slate-400 mb-2">
              <div className="h-3 w-8 rounded 
                              bg-skeleton dark:bg-skeleton-dark
                              shadow-sm shadow-hover-light dark:shadow-hover-dark" />
              <div className="h-3 w-10 rounded 
                              bg-skeleton dark:bg-skeleton-dark
                              shadow-sm shadow-hover-light dark:shadow-hover-dark" />
            </div>

            <div className="relative w-full h-1 bg-skeleton-dark rounded-lg overflow-hidden">
              <div className="absolute h-full left-0 top-0 w-1/3 
                              bg-skeleton dark:bg-skeleton-dark
                              shadow-sm shadow-hover-light dark:shadow-hover-dark" />
            </div>
          </div>

          {/* controls */}
          <div className="mt-4 w-full max-w-[640px] mx-auto px-2">
            <div className="grid grid-cols-5 items-center w-full gap-2 sm:gap-4 md:gap-6">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="h-8 w-8 sm:h-10 sm:w-10 rounded-md 
                             bg-skeleton dark:bg-skeleton-dark
                             shadow shadow-hover-light dark:shadow-hover-dark
                             justify-self-center"
                />
              ))}
            </div>
          </div>

          {/* volume */}
          <div className="mt-4 w-full max-w-[640px] mx-auto px-2">
            <div className="w-full h-1 rounded-full bg-skeleton-dark">
              <div className="h-full w-1/4 
                              bg-skeleton dark:bg-skeleton-dark
                              shadow-sm shadow-hover-light dark:shadow-hover-dark
                              rounded-full" />
            </div>
          </div>
        </div>

        {/* RIGHT: Playlist skeleton */}
        <div className="w-full md:w-1/2 flex flex-col p-4 md:p-6 min-h-0">
          <h3 className="text-lg font-bold mb-3 shrink-0">Playlist</h3>
          <div className="flex-1 overflow-y-auto pr-1 space-y-3">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className="flex items-center justify-between py-2 px-3 rounded-lg"
              >
                <div className="flex-1 space-y-2">
                  <div className="h-4 w-1/3 rounded 
                                  bg-skeleton dark:bg-skeleton-dark
                                  shadow-sm shadow-hover-light dark:shadow-hover-dark" />
                  <div className="h-3 w-1/4 
                                  bg-skeleton dark:bg-skeleton-dark
                                  shadow-sm shadow--hover-light dark:shadow-hover-dark" />
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-4 w-10 rounded 
                                  bg--skeleton dark:bg-skeleton-dark
                                  shadow-sm shadow-hover-light dark:shadow-hover-dark" />
                  <div className="h-8 w-8 rounded-full 
                                  bg-skeleton dark:bg-skeleton-dark
                                  shadow shadow-hover-light dark:shadow-hover-dark" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;
