import React from "react";
import { AppContainer } from "./components/AppContainer/AppContainer";
import { Header } from "./components/Header/Header";
import { Input } from "./components/Input/Input";
import { AppThemeProvider } from "./contexts/AppThemeProvider/AppThemeProvider";

function App() {
  return (
    <AppThemeProvider>
      <Header></Header>
    </AppThemeProvider>
  );
}

export default App;
