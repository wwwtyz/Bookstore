import React from "react";

import { AppThemeProvider } from "./contexts/AppThemeProvider/AppThemeProvider";
import { MainLayout } from "./MainLayout/MainLayout";

function App() {
  return (
    <AppThemeProvider>
      <MainLayout></MainLayout>
    </AppThemeProvider>
  );
}

export default App;
