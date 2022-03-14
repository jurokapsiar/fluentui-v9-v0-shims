import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { FluentProvider, teamsLightTheme } from "@fluentui/react-components";
import { Provider, teamsTheme } from "@fluentui/react-northstar";

ReactDOM.render(
  <FluentProvider theme={teamsLightTheme}>
    <Provider theme={teamsTheme}>
      <App />
    </Provider>
  </FluentProvider>,
  document.getElementById("root")
);
