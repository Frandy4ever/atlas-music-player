import PlayListItem from "./PlayListItem";

interface Song {
  id: string;
  title: string;
  artist: string;
  duration: string;
}

interface PlaylistProps {
  playlist: Song[];
  currentSongId: string;
  setCurrentSong: (song: Song) => void;
}

export default function Playlist({ playlist, currentSongId, setCurrentSong }: PlaylistProps) {
  return (
    <div className="w-full md:w-96 bg-gray-800 p-4 rounded-lg">
      <h2 className="text-lg font-semibold text-white mb-4">Playlist</h2>
      <div className="space-y-2">
        {playlist.map((song) => (
          <PlayListItem
            key={song.id}
            title={song.title}
            artist={song.artist}
            duration={song.duration}
            isSelected={song.id === currentSongId}
            onClick={() => setCurrentSong(song)}
          />
        ))}
      </div>
    </div>
  );
}
