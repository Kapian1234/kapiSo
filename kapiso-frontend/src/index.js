import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { DarkModeProvider } from './context/darkModeContext';
import { AuthContextProvider } from './context/authContext';
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DarkModeProvider>
      <AuthContextProvider>
        {/* <QueryClientProvider client={queryClient}> */}
          <App />
        {/* </QueryClientProvider> */}
      </AuthContextProvider>      
    </DarkModeProvider>
  </React.StrictMode>
);


