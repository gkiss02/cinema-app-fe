import RootLayout from "./components/RootLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import HomePage, { loadMovies as moviesLoader } from './pages/HomePage';
import Movie, { loadMovie as movieLoader } from "./pages/Movie";
import Booking, { bookingLoader } from "./pages/Booking";
import OrderForm from "./pages/OrderForm";
import { ReservationProvider } from "./context/ReservationContext";
import ReservationSuccess from "./pages/ReservationSuccess";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "/", element: <HomePage />, loader: moviesLoader },
        { path: "/movie/:movieId", element: <Movie />,  loader: movieLoader},
        { path: "/booking/:screeningId", element: <Booking />, loader: bookingLoader },
        { path: "/orderForm", element: <OrderForm /> },
        { path: "/reservationSuccess", element: <ReservationSuccess /> }
      ]
    }
  ]);
  
  return (
    <div>
      <ReservationProvider>
        <RouterProvider router={router} />
      </ReservationProvider>
    </div>
  );
}

export default App;
