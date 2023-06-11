import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Steps from "./1-steps/Steps";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Steps />
  </StrictMode>
);
