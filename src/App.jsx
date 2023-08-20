import Wrapper from "./components/Wrapper";
import "./App.css";
import { DataProvider } from "./providers/dataProvider";

function App() {
  return (
    <>
      <DataProvider>
        <Wrapper />
      </DataProvider>
    </>
  );
}

export default App;
