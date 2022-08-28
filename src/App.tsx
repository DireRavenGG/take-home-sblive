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
    page: 1,
  });

  const [link, setLink] = useState(generateQueryString(query));

  const { data, isFetching, isPreviousData } = useQuery(
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
        page: 1,
      }));
    } else {
      setQuery((prevQuery) => ({
        ...prevQuery,
        [id]: e.target.value,
        page: 1,
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
      setGames((prevGames) => [...prevGames, ...data.data]);
    }
  }, [data, isPreviousData]);

  // If im on the last page
  if (query.page === data?.meta.total_pages) {
    return (
      <div>
        <FilterContainer changeQuery={changeQuery} query={query} />
        <GamesContainer
          games={games}
          nextPage={nextPage}
          currPage={query.page}
          allPages={data?.meta.total_pages}
        />
      </div>
    );
  }

  // If fresh data is loading - no previous game data
  if (isFetching && games.length === 0) {
    return (
      <div>
        <FilterContainer changeQuery={changeQuery} query={query} />
        <Center m={16}>
          <Spinner />
        </Center>
      </div>
    );
  }

  // If data is loading and I already have game data
  if (isFetching) {
    return (
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
    );
  }

  // No data loading or being fetched
  return (
    <div>
      <FilterContainer changeQuery={changeQuery} query={query} />
      <GamesContainer
        games={games}
        nextPage={nextPage}
        currPage={query.page}
        allPages={data?.meta.total_pages}
      />
    </div>
  );
}

export default App;
