import { useEffect, useState } from "react";
import GamesContainer from "./components/GamesContainer";
import "./App.css";

const getGameData = async (date: string) => {
  const link = `/v2/games?date=${date}&priority_order=true`;
  const res = await fetch(link);
  const data = await res.json();
  return data;
};

function App() {
  const [games, setGames] = useState();
  useEffect(() => {
    getGameData("2022-08-23").then((res) => {
      setGames(res.data);
    });
  }, []);
  console.log(games);
  return (
    <div className="App">
      <GamesContainer games={games} />
    </div>
  );
}

export default App;
