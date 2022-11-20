import { RouterProvider } from "react-router-dom";
import rootRoutes from "./routes/rootRoutes";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={rootRoutes} />
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
        <Toaster />
      </QueryClientProvider>
    </div>
  );
}

export default App;
