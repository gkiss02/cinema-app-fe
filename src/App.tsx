import RootLayout from "./components/RootLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import HomePage from './pages/HomePage';
import MovieInformation from "./pages/MovieDetail";
import MovieProvider from './context/MovieProvider'
import Booking from "./pages/Booking";
import TicketDetail from "./pages/TicketDetail";
import Tickets from "./pages/Tickets";
import MyProfile from "./pages/MyProfile";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout></RootLayout>,
      children: [
        { path: "/", element: <HomePage></HomePage> },
        { path: "/movie-information", element: <MovieInformation></MovieInformation> },
        { path: "/booking", element: <Booking></Booking> },
        { path: "/ticket-detail", element: <TicketDetail></TicketDetail> },
        { path: "/tickets", element: <Tickets></Tickets> },
        { path: "/myprofile", element: <MyProfile></MyProfile> }
      ]
    }
  ]);
  
  return (
    <div>
      <MovieProvider>
        <RouterProvider router={router}></RouterProvider>
      </MovieProvider>
    </div>
  );
}

export default App;
