import Card from "./card";
import Carousel from "./carousel";
import Pagination from "./pagination";
import { useEffect, useState } from "react";
import "../App.css";

const Main = () => {
  const [games, setGames] = useState([]);

  const apiKey = "2705c59b51ea4036bf6f6bed038c95ee";

  useEffect(() => {
    fetch(`https://api.rawg.io/api/games?key=${apiKey}`)
      .then((res) => res.json())
      .then((data) => setGames(data));
  }, []);

  console.log(games.length);

  if (games.length === 0) {
    return (
      <>
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </>
    );
  }
  return (
    <>
      <Carousel />
      <div className="container-fluid">
        <div className="row justify-content-center align-items-center">
          {games.results.map((game) => {
            return <Card key={game.id} game={game} />;
          })}
        </div>
      </div>
      <Pagination next={games.next} prv={games.previous} setGames={setGames} />
    </>
  );
};

export default Main;
