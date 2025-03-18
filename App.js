// App.js
import React from 'react';
import { AuthProvider } from './hooks/AuthContext';
import RootRouter from './routers/RootRouter';

export default function App() {
  return (
    <AuthProvider>
      <RootRouter />
    </AuthProvider>
  );
}
