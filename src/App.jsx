import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { DataSection } from "./components/Body/DataSection";
import { Navbar } from "./components/Header/Navbar";

function App() {
  return (
    <div>
      <DataSection />
      <div className="flex">
        <Navbar />
      </div>
    </div>
  );
}

export default App;
