import React from 'react';
import { useLocation } from 'react-router-dom';

export const Episode = () => {
  const { state } = useLocation();

  const { name, summary, image } = state;
  return (
    <div>
      <h1>{name}</h1>
      <p>{summary?.replace('<p>', '').replace('</p>', '')}</p>
      {image && <img src={image.original} alt={name} />}
    </div>
  );
};
