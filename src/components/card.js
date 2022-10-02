import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../store/favouriteSlice";

const Card = ({ game }) => {
  const { background_image, name, genres, id } = game;

  const dispatch = useDispatch();
  const games = useSelector((state) => state.favourites.value);

  const favHandler = (e) => {
    const btn = e.target;
    const icon = btn.firstElementChild;

    icon.classList.contains("bi-heart")
      ? dispatch(add(game))
      : dispatch(remove(game));

    icon.classList.toggle("bi-heart");
    icon.classList.toggle("bi-heart-fill");
  };

  return (
    <div
      className="card col-3 m-2 px-0"
      style={{ width: "18rem", height: "25rem" }}
    >
      <img
        className="card-img-top "
        src={background_image}
        alt="Card image cap"
        style={{ height: "10rem" }}
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          {" "}
          {genres
            .map((gen) => (
              <span key={gen.id} className="btn btn-secondary m-1">
                {gen.name}
              </span>
            ))
            .filter((ele, i) => {
              return i < 2 ? ele : "";
            })}
        </p>
        <Link to={`/games/${id}`} className="btn btn-primary w-100">
          Details
        </Link>
        <button
          className="btn btn-danger d-block w-100 my-3"
          onClick={favHandler}
        >
          {games.find((ele) => ele.id === game.id) ? (
            <i className="bi bi-heart-fill me-3"></i>
          ) : (
            <i className="bi bi-heart me-3"></i>
          )}
          Favourite
        </button>
      </div>
    </div>
  );
};

export default Card;
