export default function LoadingSkeleton() {
    return (
      <div className="flex flex-col md:flex-row items-center md:items-stretch justify-center 
                      w-[456px] h-[1219px] md:w-[896px] md:h-[740px] 
                      bg-gray-800 dark:bg-gray-900 rounded-lg overflow-hidden p-4 animate-pulse">
        
        {/* Left Section - Cover Art & Controls */}
        <div className="w-full md:w-1/2 h-full flex flex-col items-center p-4">
          {/* Cover Art Placeholder */}
          <div className="w-[350px] h-[350px] md:w-[380px] md:h-[380px] bg-gray-700 dark:bg-gray-800 rounded-lg"></div>
  
          {/* Song Title Placeholder */}
          <div className="w-3/4 h-6 bg-gray-700 dark:bg-gray-800 rounded-md mt-4"></div>
          <div className="w-2/4 h-4 bg-gray-700 dark:bg-gray-800 rounded-md mt-2"></div>
  
          {/* Play Controls Placeholder */}
          <div className="flex items-center space-x-4 mt-6">
            <div className="w-12 h-12 bg-gray-700 dark:bg-gray-800 rounded-full"></div>
            <div className="w-12 h-12 bg-gray-700 dark:bg-gray-800 rounded-full"></div>
            <div className="w-16 h-16 bg-gray-700 dark:bg-gray-800 rounded-full"></div>
            <div className="w-12 h-12 bg-gray-700 dark:bg-gray-800 rounded-full"></div>
            <div className="w-12 h-12 bg-gray-700 dark:bg-gray-800 rounded-full"></div>
          </div>
        </div>
  
        {/* Right Section - Playlist */}
        <div className="w-full md:w-1/2 h-full flex flex-col p-4 space-y-4">
          {/* Playlist Title Placeholder */}
          <div className="w-1/3 h-6 bg-gray-700 dark:bg-gray-800 rounded-md"></div>
  
          {/* Playlist Items Placeholder */}
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-full h-14 bg-gray-700 dark:bg-gray-800 rounded-lg"></div>
          ))}
        </div>
      </div>
    );
  }
  