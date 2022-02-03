import { Fragment } from "react/cjs/react.production.min";
import "./App.css";
import Home from "./components/Home";
import DataProvider from "./context/DataProvider";

function App() {
  return (
    <Fragment>
      <DataProvider>
        <Home />
      </DataProvider>
    </Fragment>
  );
}

export default App;
