import CurrentlyPlaying from './CurrentlyPlaying';
import Playlist from './Playlist';

export default function MusicPlayer() {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-stretch justify-center w-[456px] h-[1219px] md:w-[896px] md:h-[740px] bg-gray-800 rounded-lg overflow-hidden">
      {/* Currently Playing Section */}
      <div className="w-full md:w-1/2 h-full flex">
        <CurrentlyPlaying />
      </div>

      {/* Playlist Section */}
      <div className="w-full md:w-1/2 h-full flex">
        <Playlist />
      </div>
    </div>
  );
}
