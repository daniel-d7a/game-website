import { useEffect, useState } from "react";

const Pagination = ({ next, prv, setGames }) => {
  const [count, setCount] = useState(1);
  const apiKey = "2705c59b51ea4036bf6f6bed038c95ee";

  useEffect(() => {
    if (next) {
      setCount(next.slice(-1) - 1);
    }
  }, []);

  const nextHandler = () => {
    if (!next) return;

    fetch(next)
      .then((res) => res.json())
      .then((data) => {
        setGames(data);
        setCount(count + 1);
      });
  };
  const prvHandler = () => {
    if (!prv) return;

    fetch(prv)
      .then((res) => res.json())
      .then((data) => {
        setGames(data);
        setCount(count - 1);
      });
  };

  const numberHandler = (e) => {
    const pageNo = +e.target.textContent;

    if (pageNo === 1) {
      fetch(`https://api.rawg.io/api/games?key=${apiKey}`)
        .then((res) => res.json())
        .then((data) => {
          setGames(data);
          setCount(pageNo);
        });
    } else {
      fetch(`https://api.rawg.io/api/games?key=${apiKey}&page=${pageNo}`)
        .then((res) => res.json())
        .then((data) => {
          setGames(data);
          setCount(pageNo);
        });
    }
  };

  return (
    <nav
      aria-label="Page navigation example"
      className="d-flex justify-content-center"
    >
      <ul className="pagination">
        <li className="page-item">
          <button
            className="page-link"
            onClick={() => {
              prvHandler();
            }}
            aria-label="Previous"
          >
            <span aria-hidden="true">&laquo;</span>
          </button>
        </li>
        {count > 1 && (
          <>
            <li className="page-item">
              <button className="page-link">...</button>
            </li>
            <li className="page-item">
              <button className="page-link" onClick={numberHandler}>
                {count - 1}
              </button>
            </li>
          </>
        )}

        <li className="page-item">
          <button className="page-link" onClick={numberHandler}>
            {count}
          </button>
        </li>
        <li className="page-item">
          <button className="page-link" onClick={numberHandler}>
            {count + 1}
          </button>
        </li>
        <li className="page-item">
          <button className="page-link">...</button>
        </li>

        <li className="page-item">
          <button
            className="page-link"
            onClick={() => {
              nextHandler();
            }}
            aria-label="Next"
          >
            <span aria-hidden="true">&raquo;</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
