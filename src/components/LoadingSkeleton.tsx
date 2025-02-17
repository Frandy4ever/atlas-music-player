import { useState, useEffect } from "react";

const LoadingSkeleton: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="flex flex-col md:flex-row items-center md:items-stretch justify-center 
                    w-full h-[640px] bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden 
                    p-4 animate-pulse duration-5000">
      
      {/* 🎵 Left Section - Currently Playing Placeholder */}
      <div className="w-1/2 h-full flex flex-col items-center p-4">
        <div className="w-[350px] h-[350px] md:w-[380px] md:h-[380px] bg-gray-300 dark:bg-gray-700 rounded-lg"></div>
        <div className="w-3/4 h-6 bg-gray-300 dark:bg-gray-700 rounded-md mt-4"></div>
        <div className="w-2/4 h-4 bg-gray-300 dark:bg-gray-700 rounded-md mt-2"></div>

        <div className="flex items-center space-x-4 mt-6">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-12 h-12 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
          ))}
        </div>
      </div>

      {/* 📜 Right Section - Playlist Placeholder */}
      <div className="w-1/2 h-full flex flex-col p-4 space-y-4">
        <div className="w-1/3 h-6 bg-gray-300 dark:bg-gray-700 rounded-md"></div>
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-full h-14 bg-gray-300 dark:bg-gray-700 rounded-lg"></div>
        ))}
      </div>
    </div>
  );
};

export default LoadingSkeleton;
