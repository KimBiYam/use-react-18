import { BrowserRouter, Route, Routes } from "react-router-dom";
import Batching from "./components/Batching";
import Root from "./components/Root";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Root />} />
      <Route path="/batching" element={<Batching />} />
    </Routes>
  </BrowserRouter>
);

export default App;
