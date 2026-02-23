import { useState, useEffect } from 'react'
import Menu from '../components/Menu'
import Button from '@mui/material/Button';

function Home() {
  const [tracks, setTracks] = useState([]);
  const [pesquisa, setPesquisa] = useState('');
  const [recetementeOuvida, setRecetementeOuvida] = useState([]);

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
    <Menu pesquisa={pesquisa} setPesquisa={setPesquisa} recentes={recetementeOuvida}>
      {tracks.map(track => (
        <div key={track.id}>
          <img src={track.album.cover_small} alt={track.title} />
          <p>{track.title} - {track.artist.name}</p>

          <audio controls src={track.preview}
             onPlay={() => {
               setRecetementeOuvida(prev => prev.find(musica => musica.id === track.id) ? prev : [...prev, track]);
             }}>
          </audio>
        </div>
      ))}

    </Menu>
  )
}

export default Home