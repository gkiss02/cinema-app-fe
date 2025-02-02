import RootLayout from "./components/RootLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import HomePage from './pages/HomePage';
import Movie from "./pages/Movie";
import Booking from "./pages/Booking";
import TicketDetail from "./pages/TicketDetail";
import Tickets from "./pages/Tickets";
import MyProfile from "./pages/MyProfile";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/movie/:movieId", element: <Movie />},
        { path: "/booking/:reservationId", element: <Booking /> },
        { path: "/ticket-detail", element: <TicketDetail />},
        { path: "/tickets", element: <Tickets /> },
        { path: "/myprofile", element: <MyProfile /> }
      ]
    }
  ]);
  
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
