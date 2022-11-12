import { RouterProvider } from "react-router-dom";
import rootRoutes from "./routes/rootRoutes";

function App() {
  return (
    <div>
      <RouterProvider router={rootRoutes} />
    </div>
  );
}

export default App;
