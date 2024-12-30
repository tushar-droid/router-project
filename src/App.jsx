import { useState } from "react";
import "./App.css";
import { Button } from "./components/ui/button";
import { HStack } from "@chakra-ui/react";

function App() {
  return (
    <>
      <h1>React Router project.</h1>
      <HStack>
        <Button>Click me</Button>
        <Button>Click me</Button>
      </HStack>
    </>
  );
}

export default App;
