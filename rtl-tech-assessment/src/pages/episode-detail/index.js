import React from 'react';
import { useLocation } from 'react-router-dom';
import './style.sass';

export const Episode = () => {
  const { state } = useLocation();

  const { name, summary, image, season, number } = state;
  return (
    <div>
      <section className="title-section">
        <h1>{name}</h1>
        <p>
          Season {season} - Episode {number}
        </p>
      </section>

      <section className="section">
        <p className="episode-description">{summary?.replace('<p>', '').replace('</p>', '')}</p>

        {image && <img className="episode-image" src={image.original} alt={name} />}
      </section>
    </div>
  );
};
