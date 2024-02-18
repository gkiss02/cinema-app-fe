import RootLayout from "./Components/RootLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import Main from './Pages/Main';
import MovieInformation from "./Pages/MovieDetail";
import MovieProvider from './Context/MovieProvider'
import Booking from "./Pages/Booking";
import TicketDetail from "./Pages/TicketDetail";
import Tickets from "./Pages/Tickets";
import MyProfile from "./Pages/MyProfile";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout></RootLayout>,
      children: [
        { path: "/", element: <Main></Main> },
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
