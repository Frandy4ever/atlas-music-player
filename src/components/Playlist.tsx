import { useEffect, useState } from 'react';
import PlayListItem from './PlayListItem';

interface Song {
  id: string;
  title: string;
  artist: string;
  duration: string;
}

interface PlaylistProps {
  onSongSelect: (song: Song) => void;
  currentSongId: string;
  isPlaying: boolean;
}

const Playlist: React.FC<PlaylistProps> = ({ onSongSelect, currentSongId, isPlaying }) => {
  const [songs, setSongs] = useState<Song[]>([]);
  const [loading, setLoading] = useState(true);
  const [pausedSongId, setPausedSongId] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/v1/playlist')
      .then((res) => res.json())
      .then((data) => {
        setSongs(data);
        setLoading(false);
      })
      .catch((error) => console.error('Error fetching playlist:', error));
  }, []);

  if (loading) return <p className='text-center text-gray-500'>Loading...</p>;

  const handleSongClick = (song: Song) => {
    if (song.id === currentSongId) {
      setPausedSongId(isPlaying ? song.id : null);
    } else {
      setPausedSongId(null);
    }
    onSongSelect(song);
  };

  return (
    <div className='w-[427px] bg-white border border-blue-300 dark:bg-slate-800  dark:border-red-300 py-9 px-8 rounded-r-lg shadow-lg'>
      <h3 className='text-lg font-bold mb-4'>Playlist</h3>
      <div className='flex flex-col '>
        {songs.map((song) => (
          <PlayListItem
            key={song.id}
            title={song.title}
            artist={song.artist}
            duration={song.duration}
            isPlaying={song.id === currentSongId && isPlaying}
            isPaused={song.id === pausedSongId}
            onClick={() => handleSongClick(song)}
          />
        ))}
      </div>
    </div>
  );
};

export default Playlist;
