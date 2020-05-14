import React from 'react';
import { useLocation } from 'react-router-dom';
import './style.sass';

// This function component displays data related to a particular episode on episode page. The data is passed through state from show page.

export const Episode = () => {
  const { state } = useLocation();

  const { name, summary, image, season, number } = state;

  return (
    <>
      <section className="title-section">
        <h1>{name}</h1>
        <p>
          Season {season} - Episode {number}
        </p>
      </section>

      <section className="information-section">
        {summary && (
          <p className="episode-description">{summary.replace('<p>', '').replace('</p>', '')}</p>
        )}
        {image && <img className="episode-image" src={image.original} alt={name} />}
      </section>
    </>
  );
};
