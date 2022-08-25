import { ChangeEvent, useEffect, useState } from "react";
import GamesContainer from "./components/GamesContainer";
import { Match } from "../types/ResponseData";
import { getGameData } from "./api/getGameData";
import "./App.css";
import { generateQueryString } from "./utils/generateQueryString";
import FilterContainer from "./components/FilterContainer";

function App() {
  const [games, setGames] = useState<Match[]>();
  const [query, setQuery] = useState({
    date: "2022-08-24",
    state: "",
    gender_id: "",
    status_id: "",
    sport_id: "",
  });

  const changeQuery = (e: ChangeEvent<HTMLSelectElement>, id: string) => {
    setQuery((prevQuery) => ({
      ...prevQuery,
      [id]: e.target.value,
    }));
  };

  useEffect(() => {
    getGameData(generateQueryString(query)).then((res) => {
      setGames(res.data);
    });
  }, [query]);

  return (
    <div className="App">
      <FilterContainer changeQuery={changeQuery} />
      <GamesContainer games={games} />
    </div>
  );
}

export default App;
