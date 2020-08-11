import React from "react";
import { IEpisode } from "./interfaces";

export default function EpisodesList(props: any): Array<JSX.Element> {
  const { episodes, toggleFavAction, favourites, store } = props;
  const { state, dispatch} = store 
  return episodes.map((episode: any) => {
    return (
      <div className="col">
        <section key={episode.id}>
          <div className="card" style={{ width: "18rem" }}>
            <img
              src={episode.image.medium}
              alt={`Rick and Morty ${episode.name}`}
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">{episode.name}</h5>
              <p className="card-text">
                {" "}
                Seasons: {episode.season} Number: {episode.number}
              </p>
              <button
                type="button"
                className="btn btn-success"
                onClick={() => toggleFavAction(state, dispatch, episode)}
              >
                {favourites.find((fav: IEpisode) => fav.id === episode.id) ?
                  "Удалить из избранного" : "Добавить в избранное"}
              </button>{" "}
            </div>
          </div>
        </section>
      </div>
    );
  });
}
