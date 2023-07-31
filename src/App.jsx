import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { DataSection } from "./components/Body/DataSection";
import { Navbar } from "./components/Header/Navbar";
import { Measurements } from "./components/Measurements/Measurements";

function App() {
  return (
    <div>
      <DataSection />
      <div className="flex">
        <Navbar  className="left-side" />
        <Measurements />
      </div>
    </div>
  );
}

export default App;
