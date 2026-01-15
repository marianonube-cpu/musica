import { useState } from 'react';
import './App.css';
import { genres } from './data/musicData';
import GenreCard from './components/GenreCard';

function App() {
  // Inicializa un estado para llevar la cuenta del índice de la canción para cada género.
  // { Rock: 0, Pop: 0, ... }
  const [songIndexes, setSongIndexes] = useState(
    Object.keys(genres).reduce((acc, genre) => {
      acc[genre] = 0;
      return acc;
    }, {})
  );

  // Manejador para cambiar a la siguiente canción de un género específico.
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

  return (
    <div className="App">
      <header className="app-header">
        <h1>Recomendaciones Musicales</h1>
        <p className="lead text-muted">Explora la mejor canción de cada género</p>
      </header>

      <main>
        <div className="album py-5">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {Object.keys(genres).map(genreName => {
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
