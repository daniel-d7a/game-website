import Card from "./card";
import "../App.css";
import { useSelector } from "react-redux";

const Favourites = () => {
  const games = useSelector((state) => state.favourites.value);

  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center align-items-center">
          {games.map((game) => {
            return <Card key={game.id} game={game} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Favourites;
