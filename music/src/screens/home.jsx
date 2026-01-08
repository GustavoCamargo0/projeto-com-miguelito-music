import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';

function Home() {
  const [tracks, setTracks] = useState([]);
  const [pesquisa, setPesquisa] = useState('');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    if (pesquisa.length > 2) {
      const callbackName = "deezerCallback";
      window[callbackName] = (data) => {
        setTracks(data.data);
        delete window[callbackName];
      };

      const script = document.createElement("script");
      script.src = `https://api.deezer.com/search?q=${pesquisa}&output=jsonp&callback=${callbackName}`;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    } else {
      setTracks([]);
    }
  }, [pesquisa]);

  return (
    <div>
      <Header pesquisa={pesquisa} setPesquisa={setPesquisa} />

      <Button onClick={() => setIsDrawerOpen(true)}>Open Drawer</Button>
      <Drawer anchor="left" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <div style={{ width: 250, padding: 20 }}>
          <button>Histórico</button>
        </div>
      </Drawer>

      {tracks.map(track => (
        <div key={track.id}>
          <img src={track.album.cover_small} alt={track.title} />
          <p>{track.title} - {track.artist.name}</p>

          <audio controls src={track.preview}>

          </audio>
        </div>
      ))}

    </div>
  )
}

export default Home
