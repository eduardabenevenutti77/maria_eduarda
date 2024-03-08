import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicial from "../pages/Inicial";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicial />} />
      </Routes>
    </BrowserRouter>
  );
}