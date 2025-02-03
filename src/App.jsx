import Player from "./components/Player";

const PLAYERS = {
  X: "Player 1",
  O: "Player 2",
};

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function App() {
  return (
    <main>
      <div className="game-container">
        Hello!
        <Player />
      </div>
    </main>
  );
}

export default App;
