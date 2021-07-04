import {
  BrowserRouter as Router,
} from "react-router-dom";
import PlanningPage from "./pages/planning/PlanningPage";

export default function App() {
  return (
    <Router>
      <div className="App">
        <PlanningPage />
      </div>
    </Router>
  );
}
