import { useState } from "react";
import { MantineProvider } from "@mantine/core";
import "./App.css";
import Demo from "./Demo";
function App() {
  return (
    <>
      <MantineProvider>
        <Demo />
      </MantineProvider>
    </>
  );
}

export default App;
