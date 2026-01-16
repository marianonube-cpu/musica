import React from 'react';

const GenreCard = ({ genreName, song, onNext }) => {
  if (!song) {
    return null; // No renderizar nada si no hay canción
  }

  const youtubeSearchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(song.title)}`;

  return (
    <div className="col">
      <div className="card shadow-sm h-100">
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{genreName}</h5>
          <p className="card-text">{song.title}</p>
          {/* Placeholder for the video */}
          <div className="text-center my-4">
            <i className="bi bi-music-note-beamed" style={{ fontSize: '4rem', color: '#6c757d' }}></i>
          </div>
          <div className="mt-auto">
            <div className="d-grid gap-2">
              <a href={youtubeSearchUrl} target="_blank" rel="noopener noreferrer" className="btn btn-danger">
                <i className="bi bi-youtube me-2"></i>Buscar en YouTube
              </a>
              <button onClick={() => onNext(genreName)} className="btn btn-primary">
                Siguiente recomendación
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenreCard;
