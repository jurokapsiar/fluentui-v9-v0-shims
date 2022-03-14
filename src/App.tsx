import React from "react";
import { FlexExample } from "./FlexExample";
import { GridExample } from "./GridExample";

function App() {

  return (
    <div style={{ margin: '1rem' }}>
      <h1>Component migration</h1>
      <h2>Flex</h2>
      <FlexExample />
      <h2>Grid</h2>
      <GridExample />
    </div>

  );
}

export default App;
