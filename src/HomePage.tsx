import React from 'react'
import { Store } from "./Store";
import { IEpisodeProps } from "./interfaces";
import { fetchDataAction, toggleFavAction} from './Actions'
import "./App.css";

const EpisodeList = React.lazy<any>(() => import("./EpisodesList"));

export default function HomePage() {

  const { state, dispatch } = React.useContext(Store);

  React.useEffect(() => {
    state.episodes.length === 0 && fetchDataAction(dispatch);
  });

    const props: IEpisodeProps = {
      episodes: state.episodes,
      store: {state, dispatch}, 
      toggleFavAction,
      favourites: state.favourites,
    };

  return (
    <React.Fragment>
      <React.Suspense fallback={<div>loading...</div>}>
        <div className="container">
          <section>
            <div
              className="favList"
              style={{ paddingTop: 80, marginLeft: 20, paddingBottom: 40 }}
            >
              {" "}
              <h2 className="text">Выбери любимый эпизод 🚧</h2>
            </div>
            <div className="row">
              <EpisodeList {...props} />
            </div>
          </section>
        </div>
      </React.Suspense>
    </React.Fragment>
  );
}
