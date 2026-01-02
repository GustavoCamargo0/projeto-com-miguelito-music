import { useState, useEffect } from 'react'

function App() {
   const [tracks, setTracks] = useState([]);
   const [pesquisa, setPesquisa] = useState('');

  useEffect(() => {
    if (pesquisa.length > 2) {
      fetch(`https://api.deezer.com/search/track?q=${pesquisa}`)
        .then(res => res.json())
        .then(data => {
          setTracks(data.data)
        })
    } else {
      setTracks([])
    }
  }, [pesquisa]);

  return (
    <div>
      <Header pesquisa={pesquisa} setPesquisa={setPesquisa} />
    </div>
  )
}

export default App
