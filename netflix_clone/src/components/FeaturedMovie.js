import React from "react";
import "./FeaturedMovie.css";

export default ({ item }) => {
  let data = new Date(item.release_date);
  let anoAtual = data.getFullYear();
  let valuePoints = Number(item.vote_average).toFixed(1);
  let genres = [];
  for (let i in item.genres) {
     genres.push(item.genres[i].name);
  }
  console.log(genres);

  return (
    <section
      className="Featured"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path}`,
      }}
    >
      <div className="Featured--vertical">
        <div className="Featured--horizontal">
          <div className="Featured--global">
            <div className="Featured--name">{item.title}</div>
            <div className="Featured--info">
              <div className="Featured--data">{anoAtual.toString()}</div>

              <div className="Featured--points">{`${valuePoints}Pontos`}</div>
            </div>
            <div className="Featured--overview">{item.overview}</div>
            <div className="Featured--buttons">
              
                <button className="button--assistir">Assistir</button>
              
                <button className="button--lista">+ Minha Lista</button>
              
            </div>
            <div className="Featured--genres">Gêneros: {genres.join(", ")}</div>
          </div>
        </div>
      </div>
    </section>
  );
};
