import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";

const rootRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
]);

export default rootRoutes;
