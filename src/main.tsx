import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "react-query";
import { PuffLoader } from "react-spinners";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Suspense
        fallback={
          <div className='w-svw h-svh grid place-items-center'>
            <PuffLoader size={50} color='#388da8' className='animate-spin' />
          </div>
        }>
        <App />
      </Suspense>
    </QueryClientProvider>
  </React.StrictMode>
);
