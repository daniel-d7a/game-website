import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SingleGame = () => {
  const params = useParams();
  const apiKey = "2705c59b51ea4036bf6f6bed038c95ee";
  const [game, setGame] = useState();

  useEffect(() => {
    fetch(`https://api.rawg.io/api/games/${params.id}?key=${apiKey}`)
      .then((res) => res.json())
      .then((data) => setGame(data));
  }, []);

  if (!game) {
    return <>loading...</>;
  }

  return (
    <>
      <h2 className="mt-5 text-center">{game.name}</h2>
      <img
        className="w-75 d-block mx-auto"
        src={game.background_image}
        alt="game image"
      />

      <table className="table table-striped table-hover mt-3 mb-5 w-75 m-auto table-bordered">
        <thead>
          {/* <tr>
            <th scope="col">Key</th>
            <th scope="col">Value</th>
          </tr> */}
        </thead>
        <tbody>
          <tr>
            <th scope="row">rating</th>
            <td>{game.rating}</td>
          </tr>
          <tr>
            <th scope="row">rating count</th>
            <td>{game.ratings_count}</td>
          </tr>
          <tr>
            <th scope="row">metacritic</th>
            <td>{game.metacritic}</td>
          </tr>
          <tr>
            <th scope="row">Playtime</th>
            <td>{game.playtime}</td>
          </tr>
          <tr>
            <th scope="row">Platforms</th>
            <td>
              {game.platforms.map((platform) => (
                <span key={Math.random()} className="m-2 btn btn-secondary">
                  {platform.platform.name}
                </span>
              ))}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default SingleGame;
