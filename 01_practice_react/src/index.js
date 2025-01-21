import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import Component from "./1_component";
import App from "./App";
import Item from "./2_Renderizado";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    {/* <App /> */}
    {/* <Component /> */}
    <Item />
  </StrictMode>
);
// Gay si lees esto, te amo <3