import { useState, useEffect } from 'react'
import Header from './components/Header'

function App() {
   const [tracks, setTracks] = useState([]);
   const [pesquisa, setPesquisa] = useState('');

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

      {tracks.map(track => (
        <div key={track.id}>
          <img src={track.album.cover_small} alt={track.title} />
          <p>{track.title} - {track.artist.name}</p>
        </div>
      ))}

    </div>
  )
}

export default App
