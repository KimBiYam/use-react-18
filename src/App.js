import { BrowserRouter, Route, Routes } from "react-router-dom";
import Batching from "./components/Batching";
import Root from "./components/Root";
import StartTransition from "./components/StartTransition";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Root />} />
      <Route path="/batching" element={<Batching />} />
      <Route path="/start-transition" element={<StartTransition />} />
    </Routes>
  </BrowserRouter>
);

export default App;
