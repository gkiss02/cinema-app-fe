import RootLayout from "./components/RootLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import HomePage from './pages/HomePage';
import Movie from "./pages/Movie";
import Booking from "./pages/Booking";
import OrderForm from "./pages/OrderForm";
import { ReservationProvider } from "./context/ReservationContext";
import ReservationSuccess from "./pages/ReservationSuccess";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/movie/:movieId", element: <Movie />},
        { path: "/booking", element: <Booking /> },
        { path: "/orderForm", element: <OrderForm /> },
        { path: "/reservationSuccess", element: <ReservationSuccess /> }
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
