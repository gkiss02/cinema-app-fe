import RootLayout from "./components/RootLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import HomePage from './pages/HomePage';
import Movie from "./pages/Movie";
import Booking from "./pages/Booking";
import TicketDetail from "./pages/TicketDetail";
import Tickets from "./pages/Tickets";
import MyProfile from "./pages/MyProfile";
import OrderForm from "./pages/OrderForm";
import { ReservationProvider } from "./context/ReservationContext";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/movie/:movieId", element: <Movie />},
        { path: "/booking", element: <Booking /> },
        { path: "/ticket-detail", element: <TicketDetail />},
        { path: "/tickets", element: <Tickets /> },
        { path: "/myprofile", element: <MyProfile /> },
        { path: "/orderForm", element: <OrderForm /> }
      ]
    }
  ]);
  
  return (
    <div>
      <ReservationProvider>
        <RouterProvider router={router}></RouterProvider>
      </ReservationProvider>
    </div>
  );
}

export default App;
