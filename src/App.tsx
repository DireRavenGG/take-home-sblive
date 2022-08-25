import { useEffect, useState } from "react";
import GamesContainer from "./components/GamesContainer";
import { Match } from "../types/ResponseData";
import { getGameData } from "./api/getGameData";
import "./App.css";

function App() {
  const [games, setGames] = useState<Match[]>();
  const [query, setQuery] = useState({
    date: "",
    state: undefined,
    gender: undefined,
    status: undefined,
    sport: undefined,
  });
  useEffect(() => {
    getGameData(query).then((res) => {
      setGames(res.data);
    });
  }, [query]);

  return (
    <div className="App">
      <GamesContainer games={games} />
    </div>
  );
}

export default App;
