import { useEffect, useState } from "react";
import GamesContainer from "./components/GamesContainer";
import { Match } from "../types/ResponseData";
import { getGameData } from "./api/getGameData";
import "./App.css";
import { generateQueryString } from "./utils/generateQueryString";

function App() {
  const [games, setGames] = useState<Match[]>();
  const [query, setQuery] = useState({
    date: "2022-08-24",
    state: "",
    gender: "",
    status: "",
    sport: "",
  });

  useEffect(() => {
    getGameData(generateQueryString(query)).then((res) => {
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
