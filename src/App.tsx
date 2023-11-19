import RootLayout from "./Components/RootLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import Main from './Pages/Main';
import MovieInformation from "./Pages/MovieDetail";
import MovieProvider from './Context/MovieProvider'
import Booking from "./Pages/Booking";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout></RootLayout>,
      children: [
        { path: "/", element: <Main></Main> },
        { path: "/movie-information", element: <MovieInformation></MovieInformation> },
        { path: "/booking", element: <Booking></Booking> }
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
