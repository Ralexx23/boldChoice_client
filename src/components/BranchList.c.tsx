import BranchCardC from "./BranchCard.c";
import { gamesRequest } from "../api/api";
import { useEffect, useState } from "react";

const BranchList = () => {
  const getGames = async () => {
    const response = await gamesRequest();
    return response;
  };

  const [games, setGames] = useState([]);

  useEffect(() => {
    getGames().then((response: any) => {
      setGames(response.data.games);
    });
  }, []);

  return (
    <section className="games-section">
      <h1>Selecciona tu categoría preferida</h1>

      <div className="games-container">
        {games.map((game: any) => {
          return (
            <BranchCardC
              branch={game.branch}
              src={""}
              alt={`branch ${game.branch}`}
            />
          );
        })}
      </div>
    </section>
  );
};
export default BranchList;
