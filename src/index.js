import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import TravelList from "./2-travel-list/TravelList";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <TravelList />
  </StrictMode>
);
