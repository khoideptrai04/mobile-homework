import React from "react";
import { AppProvider } from "./AppContext";
import AppNavigator from "./Navigation";

export default function App() {
  return (
    <AppProvider>
      <AppNavigator />
    </AppProvider>
  );
}
