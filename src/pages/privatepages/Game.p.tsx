import GameC from "../../components/Game.c";
import { useParams } from "react-router-dom";
import { gamesRequest } from "../../api/api";
import { useEffect, useState } from "react";

const getGames = async (branch: any) => {
  const games = await gamesRequest();
  const gameBranch = games.data.games
    .map((game: any) => {
      if (game.branch === branch) return game;
    })
    .filter((i: any) => i !== undefined);
  const gameShuflle = shuffleArrayG(gameBranch);
  return gameShuflle[0];
};

const shuffleArrayG = (array: any) => {
  const newArray = array.sort(() => Math.random() - 0.5);
  return newArray.slice(0, 1);
};

const GameP = () => {
  const { branch } = useParams();
  const [gameBranch, setGameBranch] = useState(null);

  useEffect(() => {
    const fetchGames = async () => {
      const games = await getGames(branch);
      setGameBranch(games);
    };

    fetchGames();
  }, [branch]);

  if (!gameBranch) {
    return <div>Loading...</div>;
  }

  return <GameC gameBranch={gameBranch} />;
};
export default GameP;
