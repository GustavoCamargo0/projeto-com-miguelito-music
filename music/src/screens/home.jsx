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

      <div style={{    height: "600px",
      overflowY: "scroll"}}>
      {tracks.map(track => (
        <div key={track.id} >
          <div id='musica'>
            <img src={track.album.cover_small} alt={track.title} />
              <div id='nomes'>
                <h4>{track.title}</h4>
                <p>{track.artist.name}</p>
              </div>
          </div>
          <audio controls src={track.preview}
             onPlay={() => {
               setRecetementeOuvida(prev => prev.find(musica => musica.id === track.id) ? prev : [...prev, track]);
             }}>
          </audio>
        </div>
    
      ))}
     </div>
    </Menu>
  )
}

export default Home