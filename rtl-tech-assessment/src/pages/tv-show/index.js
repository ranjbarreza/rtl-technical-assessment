import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const slugify = (string) => {
  const a = 'àáäâãåèéëêìíïîòóöôùúüûñçßÿœæŕśńṕẃǵǹḿǘẍźḧ·/_,:;';
  const b = 'aaaaaaeeeeiiiioooouuuuncsyoarsnpwgnmuxzh------';
  const p = new RegExp(a.split('').join('|'), 'g');
  return string
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(p, (c) => b.charAt(a.indexOf(c))) // Replace special characters in a with b
    .replace(/&/g, '-and-') // Replace & with ‘and’
    .replace(/[^\w-]+/g, '') // Remove all non-word characters such as spaces or tabs
    .replace(/--+/g, '-') // Replace multiple — with single -
    .replace(/^-+/, '') // Trim — from start of text
    .replace(/-+$/, ''); // Trim — from end of text
};

export const TvShow = () => {
  const [show, setShow] = useState();

  useEffect(() => {
    fetch(`http://api.tvmaze.com/shows/6771?embed=episodes`)
      .then((response) => response.json())
      .then((data) => setShow(data))
      .catch((error) => console.log(error));
  }, []);

  // const { name, summary, image, _embedded } = show;

  return (
    <>
      {show && (
        <div>
          <h1> {show.name}</h1>
          <p>{show.summary.replace('<p>', '').replace('</p>', '')}</p>
          <img src={show.image.original} alt={show.name} />
          <ul>
            {show._embedded.episodes.map((episode) => (
              <li key={episode.id}>
                <Link
                  to={{
                    pathname: `/episode/${slugify(episode.name)}`,
                    state: episode,
                  }}
                >
                  S:{episode.season} E:{episode.number} - {episode.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
