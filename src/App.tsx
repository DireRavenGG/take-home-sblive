import { useState } from "react";
import "./App.css";

const getGameData = async (date: string) => {
  const link = `/v2/games?date=${date}&priority_order=true`;
  const res = await fetch(link);
  const data = await res.json();
  return data;
};

function App() {
  const [games, setGames] = useState();
  getGameData("2022-08-23").then((res) => {
    setGames(res.data);
  });
  return <div className="App">{}</div>;
}

export default App;
