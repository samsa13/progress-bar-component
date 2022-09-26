import ProgressBar from "./components/ProgressBar";
import { items } from "./inputProps";

function App() {
  return (
    <div>
      <ProgressBar items={items} width={500} height={50} />
    </div>
  );
}

export default App;
