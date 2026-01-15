import React from 'react';

const GenreCard = ({ genreName, song, onNext }) => {
  if (!song) {
    return null; // No renderizar nada si no hay canción
  }

  const videoSrc = `https://www.youtube.com/embed/${song.youtubeId}`;

  return (
    <div className="col">
      <div className="card shadow-sm h-100">
        <div className="card-body">
          <h5 className="card-title">{genreName}</h5>
          <p className="card-text">{song.title}</p>
          <div className="ratio ratio-16x9 mb-3">
            <iframe
              src={videoSrc}
              title={`YouTube video player for ${song.title}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <button onClick={() => onNext(genreName)} className="btn btn-primary">
            Siguiente recomendación
          </button>
        </div>
      </div>
    </div>
  );
};

export default GenreCard;
