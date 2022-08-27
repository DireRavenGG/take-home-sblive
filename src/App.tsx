import { ChangeEvent, useEffect, useState } from "react";
import GamesContainer from "./components/GamesContainer";
import { Match } from "../types/ResponseData";
import "./App.css";
import FilterContainer from "./components/FilterContainer";
import { Center, Spinner } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { getGameData } from "./api/getGameData";
import { generateQueryString } from "./utils/generateQueryString";
import { queryClient } from "./index";
import { format } from "date-fns";

function App() {
  const [games, setGames] = useState<Match[]>([]);
  const [query, setQuery] = useState({
    date: format(new Date(), "yyyy-MM-dd"),
    state: "",
    gender_id: "",
    status_id: "",
    sport_id: "",
    page: 0,
  });
  const [link, setLink] = useState(generateQueryString(query));

  const { isLoading, data, isFetching, isPreviousData } = useQuery(
    ["gameData", link],
    () => getGameData(link),
    {
      keepPreviousData: true,
    }
  );

  useEffect(() => {
    setLink(generateQueryString(query));
  }, [query]);
  const changeQuery = (
    e: string | ChangeEvent<HTMLSelectElement>,
    id: string
  ) => {
    queryClient.invalidateQueries("gameData");
    setGames([]);

    if (typeof e == "string") {
      setQuery((prevQuery) => ({
        ...prevQuery,
        [id]: e,
        page: 0,
      }));
    } else {
      setQuery((prevQuery) => ({
        ...prevQuery,
        [id]: e.target.value,
        page: 0,
      }));
    }
  };

  const nextPage = () => {
    setQuery((prevQuery) => ({
      ...prevQuery,
      page: prevQuery.page + 1,
    }));
  };

  useEffect(() => {
    if (data && !isPreviousData) {
      setGames((prevGames) => [...data.data, ...prevGames]);
    }
  }, [data, isPreviousData]);

  return (
    <div className="App">
      {isLoading || (isFetching && games.length === 0) ? (
        <div>
          <FilterContainer changeQuery={changeQuery} query={query} />
          <Center m={16}>
            <Spinner />
          </Center>
        </div>
      ) : isFetching ? (
        <div>
          <FilterContainer changeQuery={changeQuery} query={query} />
          <GamesContainer
            games={games}
            nextPage={nextPage}
            currPage={query.page}
            allPages={data?.meta.total_pages}
          />

          <Center m={16}>
            <Spinner />
          </Center>
        </div>
      ) : (
        <div>
          <FilterContainer changeQuery={changeQuery} query={query} />
          <GamesContainer
            games={games}
            nextPage={nextPage}
            currPage={query.page}
            allPages={data?.meta.total_pages}
          />
        </div>
      )}
    </div>
  );
}

export default App;
