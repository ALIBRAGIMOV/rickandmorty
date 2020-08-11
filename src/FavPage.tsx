import React from 'react'
import { Store } from "./Store";
import { toggleFavAction } from "./Actions";
import { IEpisodeProps } from "./interfaces";

const EpisodeList = React.lazy<any>(() => import("./EpisodesList"));


export default function FavPage(): JSX.Element {
    const { state, dispatch } = React.useContext(Store);
  const props: IEpisodeProps = {
    episodes: state.favourites,
    store: { state, dispatch },
    toggleFavAction,
    favourites: state.favourites,
  };
  return (
    <React.Suspense fallback={<div>loading...</div>}>
      <div className="container">
        <section>
          <div
            className="favList"
            style={{ paddingTop: 80, marginLeft: 20, paddingBottom: 40 }}
          >
            {" "}
            <h2 className="text">Твой список любимых 💜</h2>
          </div>
          <div className="row">
            <EpisodeList {...props} />
          </div>
        </section>
      </div>
    </React.Suspense>
  );
}
