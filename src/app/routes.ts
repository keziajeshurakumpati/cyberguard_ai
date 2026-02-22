import { createBrowserRouter } from "react-router";
import Root from "./components/Root";
import Dashboard from "./components/Dashboard";
import AttackTimeline from "./components/AttackTimeline";
import PatternLearning from "./components/PatternLearning";
import PredictiveAlerts from "./components/PredictiveAlerts";
import HistoricalAnalysis from "./components/HistoricalAnalysis";
import Presentation from "./components/Presentation";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Dashboard },
      { path: "attack-timeline", Component: AttackTimeline },
      { path: "pattern-learning", Component: PatternLearning },
      { path: "predictive-alerts", Component: PredictiveAlerts },
      { path: "historical-analysis", Component: HistoricalAnalysis },
      { path: "presentation", Component: Presentation },
    ],
  },
]);