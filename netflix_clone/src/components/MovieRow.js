import React from "react";
import "./MovieRow.css";

export default ({ title, items }) => {
  return (
    <div className="movieRow">
      <h2>{title}</h2>
      <div className="movieRow--listarea">
        {items.results.leght != 0 &&
          items.results.map((movie, key) => (
            <div className="movieRow--item" key={key}>
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                    : "/image/imagem.jpg"
                }
                alt={`${movie.original_title}`}
              />
            </div>
          ))}
      </div>
    </div>
  );
};
// <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} />
