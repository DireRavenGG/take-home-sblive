import Game from "./Game";

const GamesContainer = ({ games }: any) => {
  // add types

  return (
    <div>
      {games
        ? games.map((game: any) => {
            return <Game key={game.uuid} game={game} />;
          })
        : null}
    </div>
  );
};

export default GamesContainer;
