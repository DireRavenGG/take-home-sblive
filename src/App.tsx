import { ChangeEvent, useEffect, useState } from "react";
import GamesContainer from "./components/GamesContainer";
import { Match } from "../types/ResponseData";
import "./App.css";
import { generateQueryString } from "./utils/generateQueryString";
import FilterContainer from "./components/FilterContainer";
import useQueryGameData from "./utils/useQueryGameData";
import { queryClient } from "./index";
import { Center, Spinner } from "@chakra-ui/react";

function App() {
  const [games, setGames] = useState<Match[]>([]);
  const [query, setQuery] = useState({
    date: "2022-08-24",
    state: "",
    gender_id: "",
    status_id: "",
    sport_id: "",
  });
  const { isLoading, data } = useQueryGameData(generateQueryString(query));

  const changeQuery = (
    e: string | ChangeEvent<HTMLSelectElement>,
    id: string
  ) => {
    if (typeof e == "string") {
      setQuery((prevQuery) => ({
        ...prevQuery,
        [id]: e,
      }));
    } else {
      setQuery((prevQuery) => ({
        ...prevQuery,
        [id]: e.target.value,
      }));
    }
  };

  useEffect(() => {
    queryClient.invalidateQueries();
    if (data) {
      setGames(data.data);
    }
  }, [data]);

  return (
    <div className="App">
      {isLoading ? (
        <div>
          <FilterContainer changeQuery={changeQuery} />
          <Center m={16}>
            <Spinner />
          </Center>
        </div>
      ) : (
        <div>
          <FilterContainer changeQuery={changeQuery} />
          <GamesContainer games={games} />
        </div>
      )}
    </div>
  );
}

export default App;
