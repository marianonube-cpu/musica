import { useState } from 'react';
import './App.css';
import { genres } from './data/musicData';
import GenreCard from './components/GenreCard';

function App() {
  const [songIndexes, setSongIndexes] = useState(
    Object.keys(genres).reduce((acc, genre) => {
      acc[genre] = 0;
      return acc;
    }, {})
  );

  const [searchQuery, setSearchQuery] = useState('');

  const handleNextSong = (genreName) => {
    setSongIndexes(prevIndexes => {
      const currentSongIndex = prevIndexes[genreName];
      const nextSongIndex = (currentSongIndex + 1) % genres[genreName].length;
      return {
        ...prevIndexes,
        [genreName]: nextSongIndex,
      };
    });
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredGenres = Object.keys(genres).filter(genreName =>
    genreName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="App">
      <header className="app-header container">
        <h1>Recomendaciones Musicales</h1>
        <p className="lead text-muted">Explora la mejor canción de cada género. Ahora con 10 recomendaciones por género.</p>
        <div className="mt-4 mb-4">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Buscar género..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      </header>

      <main>
        <div className="album py-5">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {filteredGenres.map(genreName => {
                const songIndex = songIndexes[genreName];
                const song = genres[genreName][songIndex];

                return (
                  <GenreCard
                    key={genreName}
                    genreName={genreName}
                    song={song}
                    onNext={handleNextSong}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
